import {
  createResponseModel,
  createStrintModel,
  createNumber,
} from '../models';

const loginUser = {
  post: {
    tags: ['Authentication operations'],
    description: 'Login with user credentials',
    operationId: 'loginUser',
    parameters: [],
    requestBody: {
      description: 'user data',
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              email: createStrintModel('email for the user'),
              password: createStrintModel('password'),
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'user data',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: createNumber('status code of the response'),
                data: {
                  type: 'object',
                  properties: {
                    user: {
                      $ref: '#/components/schemas/User',
                    },
                    token: {
                      type: 'string',
                      description:
                        'jwt token to be used in subsequent requests',
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTIsImVtYWlsIjoidXNlcjMwQGdtYWlsLmNvbSIsImlhdCI6MTYzMzE5OTExNywiZXhwIjoxNjY0NzU2NzE3fQ.bhEbwFCejpzdM4JiORtVjI4vUWORFEgiTkOhTybFTrU',
                    },
                  },
                },
              },
            },
          },
        },
      },
      400: {
        description: 'error response',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: createNumber('status code of the response'),
                error: {
                  type: 'object',
                  properties: {
                    description: createStrintModel('error message description'),
                    name: createStrintModel('error name'),
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
export default loginUser;
