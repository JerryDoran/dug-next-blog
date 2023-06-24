import Link from 'next/link';
import ProfilePicture from './components/ProfilePicture';
import Posts from './components/Posts';

export const revalidate = 10; //86400 seconds is more typical and is equal to 1 day

export default function HomePage() {
  return (
    <div className='mx-auto'>
      <ProfilePicture />
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Dug</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}
