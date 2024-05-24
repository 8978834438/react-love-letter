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
        Ninnu chusina aa kshanam nunchi ninnu chuse kshanam kosam, Entha gaanoo kshanaalu count chesthuu...... Eduruchuse oh swacchamaina vyakthi ni nenu.<br /> nee kanti chupullo naa prathibimbam kanipinchadaanikaina, nee gonthu swaram lo naa peru palakadaanikaina, nee ears lo naa peru vinipinchadaanikaina, nee voohallo naa alochanalu raavadaanikaina, enno janmala punyam chesthe kaani raadhu aa adhrustam ani baavinche oh saadhaarana vyakthi ni nenu.<br /><br /> Alaantidhi nee cheyyi chitikina velu pattukovadaanikai, nee cheyyi goru mudda thinadaanikai, raanunna kaalamlo nee kallallo sagamai ee prapamchaanni chudataanikai, naa yokka migatha jeevithanni ee kalalu neravercheki krushi cheseyyali ani baavinche voo kasta jeevi ni.<br /><br /> eeshwarudu thana premani cheppadaaniki thanaloki saga baaganni parvathiki icchaadu kaani nenu naaku saadhyam ayyela naa prathi kshanam lo saga baaganni nee kalala saakaram kosam unchaanu <br /><br /> Neeku eppatiki kastam raanivva kunda nee sukha dhukkallonu baagam panchukuntuu, thaamara puvvu laaga ninnu water paina vikasinchela chesi nenu kaandam la buradhalo untaanani maatisthuu.......<br />
        always yours,<br />
        @Nee jeevitha bagaswamyam kaavalani korukune vyakthi ni.
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
