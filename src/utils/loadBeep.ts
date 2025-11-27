import gravitational_beep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio('/sounds/beep.mp3');
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };
}
