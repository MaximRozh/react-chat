import axios, { AxiosError, AxiosInstance } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token") || "";
  config.headers!.Authorization = token;
  return config;
});

export class HttpService {
  constructor(private _api: AxiosInstance) {}
  public async post(url: string, options?: any): Promise<any> {
    return await this._api
      .post(url, options)
      .catch((error: Error | AxiosError) => this.handleError(error));
  }
  public async get(url: string, options?: any): Promise<any> {
    return await this._api
      .get(url, options)
      .catch((error: Error | AxiosError) => this.handleError(error));
  }

  private handleError(error: Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      const err: any = error?.response?.data;
      console.error(err);
    } else {
      throw error;
    }
  }
}

const httpService = new HttpService(axiosInstance);

export default httpService;
