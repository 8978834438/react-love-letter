import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My Dear heart beat alias Gayathri🖤,<br />
        Ninnu chusina aa kshanam nunchi ninnu chuse kshanam kosam, Entha gaanoo kshanaalu count chesthuu...... Eduruchuse oh swacchamaina vyakthi ni nenu.<br /> nee kanti chupullo naa prathibimbam kanipinchadaanikaina, nee gonthu swaram lo naa peru palakadaanikaina, nee ears lo naa peru vinipinchadaanikaina, nee voohallo naa alochanalu raavadaanikaina, enno janmala punyam chesthe kaani raadhu aa adhrustam ani baavinche oh saadhaarana vyakthi ni nenu.<br />
        always yours,<br />
        @niihaaarrrr
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
