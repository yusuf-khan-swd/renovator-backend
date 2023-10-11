import { Book, Category, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  BookSearchableFields,
  bookRelationalFields,
  bookRelationalFieldsMapper,
} from './book.constant';
import { IBookFilters } from './book.interface';

const createBook = async (data: Book): Promise<Book> => {
  return await prisma.book.create({ data, include: { category: true } });
};

const getAllBooks = async (
  filters: IBookFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const { searchTerm, minPrice, maxPrice, ...filterData } = filters;

  const numMinPrice = Number(minPrice);
  const numMaxPrice = Number(maxPrice);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: BookSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    andConditions.push({
      price: {
        gte: numMinPrice,
        lte: numMaxPrice,
      },
    });
  } else if (minPrice !== undefined) {
    andConditions.push({
      price: {
        gte: numMinPrice,
      },
    });
  } else if (maxPrice !== undefined) {
    andConditions.push({
      price: {
        lte: numMaxPrice,
      },
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => {
        if (bookRelationalFields.includes(key)) {
          return {
            [bookRelationalFieldsMapper[key]]: {
              id: (filterData as any)[key],
            },
          };
        } else {
          return {
            [key]: {
              equals: (filterData as any)[key],
            },
          };
        }
      }),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
    include: { category: true },
  });

  const total = await prisma.book.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.findUnique({
    where: { id },
    include: { category: true },
  });
};

const updateBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  return await prisma.book.update({
    where: { id },
    data,
    include: { category: true },
  });
};

const deleteBook = async (id: string): Promise<Book | null> => {
  return await prisma.book.delete({
    where: { id },
    include: { category: true },
  });
};

const getBooksByCategory = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: { id },
    include: { books: true },
  });
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
};
