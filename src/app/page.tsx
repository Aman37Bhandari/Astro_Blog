import TopStories from "@/components/home/top-stories/TopStories";
import BlogsCards from "@/components/home/blogs-cards/BlogsCards";

import fetchBlogsList from "@/modules/api/fetchBlogsList";

const HomePage = async () => {
  const blogsList = await fetchBlogsList();

  let categories: string[] = [];

  blogsList.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  categories.sort();

  return (
    <>
      <TopStories blogsList={blogsList} />
      <BlogsCards blogsList={blogsList} categories={categories} />
    </>
  );
};

export default HomePage;
