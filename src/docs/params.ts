export const createLimitQueryParam = (description: string) => ({
  name: 'limit',
  in: 'query',
  schema: {
    type: 'number',
  },
  required: false,
  description,
});

export const createPageQueryParam = (description: string) => ({
  name: 'page',
  in: 'query',
  schema: {
    type: 'number',
  },
  required: false,
  description,
});

export const createPaginationQueryParamns = (
  pageDescription: string,
  limitDescription: string
) => [
  createPageQueryParam(pageDescription),
  createLimitQueryParam(limitDescription),
];
