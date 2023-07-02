import { getPostsMeta } from '@/lib/posts';
import ListItem from './ListItem';

export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available</p>;
  }

  return (
    <section className=''>
      <ul className='w-full list-none grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
