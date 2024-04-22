import { useState, useRef } from 'react'
import './App.css';
import MyVideo from "./assets/MyVideo.mp4";
import { MdOutlinePlayCircleFilled, MdPauseCircle } from "react-icons/md";

function App() {
  const [play, setPlay] = useState(false);
  const ref =useRef(null);

  const handleClickPlay = () =>{
    const nextisPlaying = !play;
    setPlay(nextisPlaying);
  
  if(nextisPlaying){
    ref.current.play();
  }else{
    ref.current.pause();
  }
}



  return (
    <div className='flex flex-col items-center justify-center border-[1px] border-blue-400'>
      <h1 className='font-bold text-blue-400'>Play/Pause Control</h1>
      <span className={``}>{play ? <p className='text-green-600'>Playing</p> : <p className='text-red-600'>Paused</p>}</span>
        <video  
        ref={ref}
        onPlay={ () => setPlay(true)}
        onPause={() => setPlay(false)}
        className={`object-center w-[400px] h-[350px]`}> <source src={MyVideo} type='video/mp4'/></video>
        <button onClick={handleClickPlay} className={`text-[40px] text-blue-400`}>{play ?<MdPauseCircle/>: <MdOutlinePlayCircleFilled/>}</button>
    </div>
  )
}

export default App
