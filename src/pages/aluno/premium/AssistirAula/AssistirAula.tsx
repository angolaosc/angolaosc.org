import React, { useRef } from 'react';
import video from './y2mate.com - Nasty C  Crazy Crazy_480p.mp4'
import { Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

const AssistirAula: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className='mt-32'>
      <video className='rounded-md' ref={videoRef} controls>
        <source src={video} type="video/mp4" />
        {/* Adicione mais elementos source para suportar outros formatos de vídeo */}
      </video>
      <Button  onClick={handlePlayPause}><PlayCircleIcon/>Play</Button>
      <Button  onClick={handlePlayPause}><PauseCircleIcon/>Pause</Button>
    </div>
  );
};

export default AssistirAula;
