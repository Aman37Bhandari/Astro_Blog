import { notFound } from "next/navigation";

import Header from "@/components/blog_slug/header/Header";
import ImagesSlider from "@/components/blog_slug/images-slider/ImagesSlider";
import Content from "@/components/blog_slug/content/Content";
import Footer from "@/components/blog_slug/footer/Footer";
import FooterNav from "@/components/blog_slug/footer-nav/FooterNav";
import Comments from "@/components/blog_slug/comments/Comments";

import fetchBlogInfo from "@/modules/api/fetchBlogInfo";

import data from "@/app/data";

type Params = Promise<{
  blog_slug: string;
}>;

const BlogPage = async ({ params }: { params: Params }) => {
  const blogSlug = (await params).blog_slug;

  if (!blogSlug) {
    return notFound();
  }

  const blog = await fetchBlogInfo(blogSlug);

  if (!blog) {
    return notFound();
  }

  const blogIndex = data.blogs.findIndex((b) => b.slug === blogSlug);
  const previousBlog = blogIndex > 0 ? data.blogs[blogIndex - 1] : null;
  const nextBlog =
    blogIndex < data.blogs.length - 1 ? data.blogs[blogIndex + 1] : null;

  return (
    <>
      <Header
        title={blog.title}
        author={blog.author}
        date={blog.created_at}
        comments={blog.comments?.length || 0}
        visitors={blog.visitors}
        category={blog.category}
        slug={blog.slug}
      />
      {blog?.slider_images?.length && (
        <ImagesSlider blogId={blog.id} images={blog.slider_images} />
      )}
      <Content content={blog.content} lastUpdated={blog.updated_at} />
      <Footer tags={blog.tags} slug={blog.slug} title={blog.title} />
      <FooterNav
        prevBlog={
          previousBlog
            ? {
                thumbnail: previousBlog.thumbnail,
                title: previousBlog.title,
                date: previousBlog.date,
                slug: previousBlog.slug,
              }
            : undefined
        }
        nextBlog={
          nextBlog
            ? {
                thumbnail: nextBlog.thumbnail,
                title: nextBlog.title,
                date: nextBlog.date,
                slug: nextBlog.slug,
              }
            : undefined
        }
      />
      {blog.comments?.length && <Comments commentsList={blog.comments} />}
    </>
  );
};

export default BlogPage;
