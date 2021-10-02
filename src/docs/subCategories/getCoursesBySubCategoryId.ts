import { subCategoryTag } from '../constants';
import { createResponseModel } from '../models';

const getCoursesBySubCategoryId = {
  get: {
    tags: [subCategoryTag],
    description: 'get courses by subcategory id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          $ref: '#/components/schemas/id',
        },
        description: 'subcategory id',
      },
    ],
    operationId: 'getCoursesBySubCategoryId',
    responses: {
      '200': {
        description: 'get courses by subcategory id',
        content: {
          'application/json': {
            schema: createResponseModel(
              '#/components/schemas/CoursesBySubCategoryId'
            ),
          },
        },
      },
    },
  },
};

export default getCoursesBySubCategoryId;
