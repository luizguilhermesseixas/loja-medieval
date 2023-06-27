/* type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
}; */

type ServiceResponseSuccessfulType = 'CREATED' | 'SUCCESSFUL';

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessfulType,
  data: T
};

export type ServiceResponse<T> = /* ServiceResponseError |  */ ServiceResponseSuccess<T>;