import Sidebar from './components/sideBar';
import TranslationDisplay from './components/translationDisplay';
import PlayPauseButton from './components/playPauseButton';

export default function Home() {
    return (
        <div className='flex'>
            <Sidebar/>
            <TranslationDisplay />
            <PlayPauseButton />
        </div>
    );
}
