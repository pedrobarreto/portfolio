import axios, { AxiosInstance, AxiosResponse } from 'axios';

const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const backendApi: AxiosInstance = axios.create({
  baseURL: backendBaseUrl,
});

export const requestProjects = async (endpoint: string, body?: any): Promise<any> => {
  const { data }: AxiosResponse = await backendApi.post(endpoint, body);
  return data;
};

export const requestPosts = async (endpoint: string, body?: any): Promise<any> => {
  const { data }: AxiosResponse = await backendApi.post(endpoint, body);
  return data;
};

interface Video {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
}

export const requestVideos = async (endpoint: string, body?: { pagination: number; language: string }): Promise<Video[]> => {
  const { data }: AxiosResponse<Video[]> = await backendApi.post(endpoint, body);

  if (!Array.isArray(data)) {
    throw new Error('Unexpected response format');
  }

  return data;
};
