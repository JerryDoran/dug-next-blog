import Link from 'next/link';
import { getFormattedDate } from '../../lib/getFormattedDate';
import Image from 'next/image';

export default function ListItem({ post }) {
  const { id, title, subtitle, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <Link href={`/posts/${id}`}>
      <li className='flex flex-col justify-between border h-full bg-slate-200 border-slate-200 p-4 rounded-md shadow-md dark:bg-slate-800 cursor-pointer hover:animate-pulse'>
        <h2 className='font-semibold text-xl text-violet-600 mb-4 underline hover:underline'>
          {title}
        </h2>
        <p className=' text-slate-400'>{subtitle}</p>
        <br />
        <p className='text-xs mt-1 text-slate-400'>{formattedDate}</p>
      </li>
    </Link>
  );
}
