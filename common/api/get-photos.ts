import axios from "axios";
import { Photo } from "../types/api.types";

export const getPhotosWithCategory = (
  selectedCategory: string,
  page: number
): Promise<{ items: Photo[]; page: number; total: number }> =>
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/images`, {
      params: {
        category: selectedCategory,
        page: page + 1,
      },
    })
    .then(res => res.data);

export const getAllPhotos = (
  page: number
): Promise<{ items: Photo[]; page: number; total: number }> =>
  axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/images`, {
      params: {
        page: page + 1,
      },
    })
    .then(res => res.data);
