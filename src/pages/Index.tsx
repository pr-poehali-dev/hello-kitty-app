import { useEffect, useState } from 'react';

const Index = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [audioData, setAudioData] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://functions.poehali.dev/ffd74a52-f90c-4e55-9164-0291eb68da2b')
      .then(res => res.json())
      .then(data => setAudioData(data.audio))
      .catch(err => console.error('Failed to load meow sound:', err));
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && audioData) {
        e.preventDefault();
        
        setIsPressed(true);
        
        const audio = new Audio(`data:audio/wav;base64,${audioData}`);
        audio.play();
        
        setTimeout(() => setIsPressed(false), 1200);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [audioData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFB6C1] via-[#FFF0F5] to-[#E6D5E6] overflow-hidden">
      <div className="text-center">
        <div 
          className={`transition-transform duration-300 ${
            isPressed ? 'scale-95' : 'scale-100'
          }`}
        >
          <img 
            src="https://cdn.poehali.dev/projects/4c0255c5-2a42-481c-85cb-598b17e7d683/files/0c263db3-96df-4da1-9ac4-d7a883096d26.jpg"
            alt="Hello Kitty"
            className="w-80 h-80 object-contain mx-auto animate-pulse-soft"
          />
        </div>
        
        <div className="mt-8 text-[#FF6BC1] font-bold text-xl animate-bounce-soft">
          Нажми пробел 🐱
        </div>
        
        {isPressed && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-8xl animate-ping">
              💕
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;