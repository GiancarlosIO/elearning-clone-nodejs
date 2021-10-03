/* eslint-disable no-underscore-dangle */
import { Request } from 'express';

type TPaginationData = {
  limit?: number | undefined;
  page?: number | undefined;
};

const parseStringToInt = (str: string): number | undefined => {
  const numb = parseInt(str, 10);

  // return undefined instead of NaN
  return Number.isNaN(numb) ? undefined : numb;
};

export const getPageAndLimitFromQuery = (
  query: Request['query']
): TPaginationData => {
  const { page, limit } = query;

  const limitInt = parseStringToInt(limit as string) as number | undefined;

  const pageInt = parseStringToInt(page as string) as number | undefined;

  return {
    page: pageInt as number | undefined,
    limit: limitInt as number | undefined,
  };
};
