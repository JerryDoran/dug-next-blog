import Link from 'next/link';
import { getFormattedDate } from '../../lib/getFormattedDate';

export default function ListItem({ post }) {
  const { id, title, subtitle, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className='flex flex-col justify-between border h-full bg-slate-100 border-slate-200 p-4 rounded-md shadow-md dark:bg-slate-800 '>
      <Link href={`/posts/${id}`}>
        <h2 className='font-semibold text-xl text-violet-600 mb-4 hover:underline'>
          {title}
        </h2>
      </Link>
      <p className=' text-slate-400'>{subtitle}</p>
      <br />
      <p className='text-xs mt-1 text-slate-400'>{formattedDate}</p>
    </li>
  );
}
