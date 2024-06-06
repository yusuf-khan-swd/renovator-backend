import { Prisma, Service, ServiceStatus } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  ServiceSearchableFields,
  serviceRelationalFields,
  serviceRelationalFieldsMapper,
} from './service.constant';
import { IServiceFilters } from './service.interface';

const createService = async (data: Service): Promise<Service> => {
  return await prisma.service.create({ data });
};

const getAllServices = async (
  filters: IServiceFilters,
  options: IPaginationOptions
): Promise<IGenericResponse<Service[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  console.log(filters);
  console.log(options);

  const { searchTerm, minPrice, maxPrice, serviceStatus, ...filterData } =
    filters;

  console.log(serviceStatus);

  const numMinPrice = Number(minPrice);
  const numMaxPrice = Number(maxPrice);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      OR: ServiceSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (serviceStatus) {
    if (serviceStatus === ServiceStatus.available) {
      andConditions.push({
        status: ServiceStatus.available,
      });
    } else if (serviceStatus === ServiceStatus.upcoming) {
      andConditions.push({
        status: ServiceStatus.upcoming,
      });
    } else if (serviceStatus === ServiceStatus.booked) {
      andConditions.push({
        status: ServiceStatus.booked,
      });
    }
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
        if (serviceRelationalFields.includes(key)) {
          return {
            [serviceRelationalFieldsMapper[key]]: {
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

  const whereConditions: Prisma.ServiceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: { [sortBy]: sortOrder },
    include: { category: true },
  });

  const total = await prisma.service.count();

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getUpcomingServices = async (limit: any) => {
  const limitNum = parseInt(limit) || undefined;
  const result = await prisma.service.findMany({
    where: { status: ServiceStatus.upcoming },
    take: limitNum,
    include: { category: true },
  });
  return result;
};

const getOngoingServices = async (limit: any) => {
  const limitNum = parseInt(limit) || undefined;

  const result = await prisma.service.findMany({
    where: { status: ServiceStatus.available },
    take: limitNum,
    include: { category: true },
  });
  return result;
};

const getSingleService = async (id: string): Promise<Service | null> => {
  return await prisma.service.findUnique({
    where: { id },
    include: { category: true },
  });
};

const updateService = async (
  id: string,
  data: Partial<Service>
): Promise<Service | null> => {
  return await prisma.service.update({
    where: { id },
    data,
  });
};

const deleteService = async (id: string): Promise<Service | null> => {
  return await prisma.service.delete({
    where: { id },
  });
};

export const ServiceService = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
  getUpcomingServices,
  getOngoingServices,
};
