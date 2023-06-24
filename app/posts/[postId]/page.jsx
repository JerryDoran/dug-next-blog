import { getSortedPostsData, getPostData } from "@/lib/posts";
import { getFormattedDate } from "@/lib/getFormattedDate";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params: { postId } }) {
  const posts = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not Found!",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostPage({ params: { postId } }) {
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/" className="flex items-center justify-center gap-x-2">
            <FaArrowLeft /> Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
