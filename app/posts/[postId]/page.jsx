import { getPostsMeta, getPostByName } from '@/lib/posts';
import { getFormattedDate } from '@/lib/getFormattedDate';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css'; //get styles from node_modules folder under 'highlight.js'

// this line of code will not cache any data
export const revalidate = 86400;

// this function should always return an array of objects!
export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) {
    return {
      title: 'Post not Found!',
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function PostPage({ params: { postId } }) {
  const post = await getPostByName(`${postId}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className='text-3xl mt-4 mb-0'>{meta.title}</h2>
      <p className='mt-0 text-sm'>{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className='flex flex-row gap-4'>{tags}</div>
      </section>
      <p className='mb-10'>
        <Link href='/' className='flex items-center justify-center gap-x-2'>
          <FaArrowLeft /> Back to home
        </Link>
      </p>
    </>
  );
}
