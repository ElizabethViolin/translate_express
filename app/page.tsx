import Sidebar from './components/sideBar';
import Message from './components/translationDisplay';
import PlayPauseButton from './components/playPauseButton';

export default function Home() {
    return (
        <div className='flex'>
            <Sidebar/>
            <Message />
            <PlayPauseButton />
        </div>
    );
}
