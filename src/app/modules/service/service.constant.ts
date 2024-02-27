export const ServiceSearchableFields = ['title', 'location'];

export const ServiceFilterableFields = [
  'searchTerm',
  'minPrice',
  'maxPrice',
  'location',
  'categoryId',
  'serviceStatus',
];

export const serviceRelationalFields: string[] = ['categoryId'];
export const serviceRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
