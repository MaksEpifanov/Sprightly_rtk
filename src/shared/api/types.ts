type StatusResponse = 200 | 304 | 400 | 404 | 405 | 429 | 500;

export interface ApiResponseError {
  status: StatusResponse;
  type: string;
  message: string;
  error: string;
  report_url: string;
}
