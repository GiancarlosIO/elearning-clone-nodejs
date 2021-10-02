export function createResponse<TData = {}>(data: TData, codeStatus: number) {
  return {
    status: codeStatus,
    data,
    error: null,
  };
}
export function createErrorResponse<TError = {}>(
  error: TError,
  statusCode: number
) {
  return {
    status: statusCode,
    data: null,
    error,
  };
}
