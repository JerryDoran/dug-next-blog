import { getPostsMeta } from '@/lib/posts';
import ListItem from '@/app/components/ListItem';
import Link from 'next/link';

export const revalidate = 86400;

// this function should always return an array of objects!
// this function will not work when revalidate is set to '0'
export async function generateStaticParams() {
  const posts = await getPostsMeta(); //this request will be deduped by Next JS

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }) {
  const posts = await getPostsMeta(); //this request will be deduped by Next JS

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts for that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <h2 className='text-3xl prose dark:prose-invert mt-4 mb=0'>
        Results for: #{tag}
      </h2>
      <section className='mt-6 mx-auto '>
        <ul className='w-full list-none p-0 max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
}
