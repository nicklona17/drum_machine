import React, { useEffect } from 'react';

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const App = () => {

  return (
    <div className="container">
      <div id="drum-machine">
        <div id="display">
          <h1></h1>
        </div>
        <div id="pad-container">
          {audioClips.map(clip => (
            <Pad key={clip.id} clip={clip} />
          ))}
        </div>  
      </div>
    </div>
  );
}

function Pad({ clip }) {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [])

  const handleKeyPress = (e) => {
    if (e.keyCode == clip.keyCode) {
      playSound();
    }
  }

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    const audioName = document.getElementById('display');
    audioTag.currentTime = 0;
    audioTag.play();
    audioName.innerHTML = clip.id;
  }

  return (
    <div onClick={playSound} className="drum-pad" id={clip.id}>
      <audio src={clip.url} className="clip" id={clip.keyTrigger} />
      {clip.keyTrigger}
    </div>
  );
}


export default App;
