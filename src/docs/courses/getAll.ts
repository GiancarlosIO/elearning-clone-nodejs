import { createPaginationQueryParamns } from '../params';
import { createResponseModel } from '../models';
import { coursesTag } from '../constants';

const getAll = {
  get: {
    tags: [coursesTag],
    description: 'Get all courses',
    operationId: 'courseGetAll',
    parameters: [
      ...createPaginationQueryParamns(
        'current page for the course list',
        'limit how many courses you will get'
      ),
    ],
    responses: {
      '200': {
        description: 'courses were obtained',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Courses', true),
          },
        },
      },
    },
  },
};
export default getAll;
