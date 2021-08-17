import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/posts';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
