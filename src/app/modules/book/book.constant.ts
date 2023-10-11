export const BookSearchableFields = ['title', 'author', 'genre'];

export const BookFilterableFields = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'categoryId',
];

export const bookRelationalFields: string[] = ['categoryId'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
