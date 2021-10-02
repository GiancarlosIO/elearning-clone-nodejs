import { categoryTag } from '../constants';
import { createResponseModel } from '../models';

const getCoursesByCategoryId = {
  get: {
    tags: [categoryTag],
    description: 'get courses by category id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          $ref: '#/components/schemas/id',
        },
        description: 'category id',
      },
    ],
    responses: {
      '200': {
        description: 'get courses by category id',
        content: {
          'application/json': {
            schema: createResponseModel(
              '#/components/schemas/CoursesByCategoryId'
            ),
          },
        },
      },
    },
  },
};

export default getCoursesByCategoryId;
