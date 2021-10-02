import { createNumber, createResponseModel } from '../models';
import { coursesTag } from '../constants';

const getCourse = {
  get: {
    tags: [coursesTag],
    description: 'Get a single course',
    operationId: 'courseGetCourse',
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'A single course id',
      },
    ],
    responses: {
      '200': {
        description: 'course was obtained by id',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Course'),
          },
        },
      },
    },
  },
};
export default getCourse;
