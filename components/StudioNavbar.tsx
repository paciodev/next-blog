import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { NavbarProps } from 'sanity';

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[#F7AB0A] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2' />
          Przejdź do strony głównej
        </Link>

        <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]'>
          <h1 className='font-bold text-white'>
            Pamiętaj o zasadach tworzeniu bloga zamieszczonych tutaj 👉
          </h1>
          <Link
            href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            className='text-[#F7AB0A] font-bold ml-2 underline'
          >
            kliknij mnie
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
