import axios, { AxiosInstance, AxiosResponse } from 'axios';

const githubApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API_BASE_URL,
});

export const requestProjects = async (endpoint: string, body?: any): Promise<any> => {
  const { data }: AxiosResponse = await githubApi.get(endpoint, body);
  return data;
};

const devToApiBaseUrl = process.env.NEXT_PUBLIC_DEV_TO_API_BASE_URL;

export const devToApi: AxiosInstance = axios.create({
  baseURL: devToApiBaseUrl,
});

export const requestPosts = async (endpoint: string, body?: any): Promise<any> => {
  const { data }: AxiosResponse = await devToApi.post(endpoint, body);
  return data;
};