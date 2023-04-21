import axios from "axios";
import { Photo } from "../types/api.types";

export const getPhotosWithCategory = (
  selectedCategory: string,
  page: number
): Promise<{ items: Photo[]; page: number; total: number }> =>
  axios
    .get("https://glorious-jade-whale.cyclic.app/api/images", {
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
    .get("https://glorious-jade-whale.cyclic.app/api/images", {
      params: {
        page: page + 1,
      },
    })
    .then(res => res.data);
