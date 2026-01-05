import type { BlogsList } from "@/types/types";

import globalConfig from "@/config/globalConfig";

const fetchBlogsList = async (): Promise<BlogsList> => {
  let blogsList: BlogsList = [];

  try {
    const response = await fetch(`${globalConfig.apiUrl}/list/blogs`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      credentials: "include",
    });

    if (response?.ok) {
      const responseData = await response.json();

      if (responseData?.blogs?.length) {
        blogsList = responseData.blogs;
      }
    }
  } catch (error: unknown) {
    console.log(error);

    blogsList = [];
  }

  return blogsList;
};

export default fetchBlogsList;
