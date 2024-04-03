import axios from "axios";
import { Tag } from "@/types";

const REST_API_BASE_URL = "http://localhost:8080/tag"; // @TODO: changed to /api/tags



export const getTags = async () => {
  const response = await axios.get(REST_API_BASE_URL);
  return response.data;
}

export const getTag = async (group: number, element: number) => {
  const response = await axios.get(`${REST_API_BASE_URL}/${group}/${element}`);
  return response.data;
}

export const addTag = async (tag: Tag) => {
  const response = await axios.post(REST_API_BASE_URL, tag);
  return response.data;
}

export const updateTag = async (tag: Tag) => {
  const response = await axios.put(REST_API_BASE_URL, tag);
  return response.data;
}