interface AxiosRequestConfig<T = any> {
  url?: string;
  method?: string;
  baseURL?: string;
  data?: T;
  headers?: any;
  params?: any;
}

export interface AxiosResponse<T = any>  {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig<T>;
  request?: any;
}