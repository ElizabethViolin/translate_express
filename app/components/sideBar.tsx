import {
  PencilSquareIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/16/solid';

export default function Sidebar() {
  return (
    <div className='bg-gray-300 dark:bg-sidebarGrey flex flex-col h-screen w-72 text-gray-700 dark:text-gray-300 p-5'>
      <div className='flex justify-between dark:text-white'>
        <AdjustmentsHorizontalIcon className='h-[1.4rem] w-[1.4rem]'/>
        <PencilSquareIcon className='h-[1.4rem] w-[1.4rem]'/>
      </div>
    </div>
  );
}
