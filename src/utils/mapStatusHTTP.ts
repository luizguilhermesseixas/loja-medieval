export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CREATED: 201,
    SUCCESSFUL: 200,
  };

  return statusHTTPMap[status] ?? 500;
}