import {
  PlayCircleIcon,
  PauseCircleIcon,
} from '@heroicons/react/16/solid';

export default function PlayPauseButton() {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 pl-36">
      <PlayCircleIcon className='h-[3rem] w-[3rem]'/>
    </div>
  );
}
