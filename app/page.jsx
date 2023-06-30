import Posts from './components/Posts';

export const revalidate = 86400; //86400 seconds is more typical and is equal to 1 day

export default function HomePage() {
  return (
    <div className='dark:text-slate-200'>
      <h1 className='text-2xl font-semibold mb-4'>Recent Notes</h1>
      <Posts />
    </div>
  );
}
