import type { Blog } from "@/types/types";

import globalConfig from "@/config/globalConfig";

const fetchBlogInfo = async (slug: string): Promise<Blog | null> => {
  let blog: Blog | null = null;

  try {
    const response = await fetch(`${globalConfig.apiUrl}/info/blog/${slug}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
      credentials: "include",
    });

    if (response?.ok) {
      const responseData = await response.json();

      if (responseData?.blog?.id) {
        blog = responseData.blog;
      }
    }
  } catch (error: unknown) {
    console.log(error);

    blog = null;
  }

  return blog;
};

export default fetchBlogInfo;
