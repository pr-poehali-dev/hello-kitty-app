import { useEffect, useState } from 'react';

const Index = () => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        
        setIsPressed(true);
        
        const audio = new Audio('data:audio/wav;base64,UklGRiQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAFAAB/f39/f39/f39/f39/gICAgICAgICAgICAgICBgYGBgYGBgYGCgoKCgoKDg4ODg4SEhISFhYWFhoaGh4eHiIiIiYmJioqKi4uLjIyMjY2Njo6Oj4+PkJCQkZGRkpKSk5OTlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJysrKy8vLzMzMzc3Nzs7Oz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW19fX2NjY2dnZ2tra29vb3Nzc3d3d3t7e39/f4ODg4eHh4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8vLy8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////AAECAgMEBAUGBgcICAkKCgsLDA0NDg8PEBEREhMTFBUVFhcXGBkZGhsbHB0dHh8fICEhIiMjJCUlJiYnKCgpKiorKywtLS4vLzAxMTIzMzQ1NTY2Nzg4OTo6Ozs8PT0+Pz9AQEFCQkNEREVGRkdISElKSktMTE1OTk9QUFFSUlNUVFVWVldYWFlaWltcXF1eXl9gYGFiYmNkZGVmZmdoaGlqamtsbG1ubm9wcHFycnN0dHV2dnd4eHl6ent8fH1+fn+AgIGCgoOEhIWGhoeIiImKiouMjI2Ojo+QkJGSkpOUlJWWlpeYmJmampucnJ2enp+goKGioqOkpKWmpqeoqKmpqqqrrKytra6ur7CwsbKys7S0tbW2tre4uLm6uru8vL29vr6/wMDBwsLDxMTFxsbHyMjJysrLy8zNzc7Pz9DR0dLT09TV1dbX19jZ2drb293c3d7e3+Dg4eLi4+Tk5ebm5+jo6err6+zt7e7v7/Dx8fLz8/T19fb39/j5+fr7+/z9/f7///4+/fz7+vn4+Pf29fX09PPy8fHw7+7t7ezt6+rq6ejn5+bm5eTj4+Lh4ODf3t7d3Nzb2tnZ2NfX1tbV1NTT0tLR0NDPzs7NzMvLysrJyMfHxsXFxMPCwsHAwL+/vr28vLu6urn5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubm4t7a1tLOysrGwr6+urq2sq6qqqKenp6alpKSjoqGgoJ+enp2cnJuampmYmJeWlpWUk5OSkZCPj46NjY2MjIuKiomIiIeGhoWEhIODgoGBgIB/f35+fX18fHt6eXl4eHd3dnV1dHRzcnJxcXBvb29ubW1sbGtqamloaGdnZmVlZGRjY2JiYWBgYF9fXl1dXVxcW1taWlpaWVlYWFdXVldWVVVVVFRTU1NTUlJRUVFQUFBPT09OTk1NTU1MTExLSkpKSklJSEhISEdHR0ZGRkZFRUVEREREQ0NDQkJCQkFBQUFAQEBAP0A/Pz4+Pj4+PT09PTw8PDw8Ozs7Ozs6Ojo6Ojk5OTk5ODg4ODg4Nzc3NzY2NjY2NTU1NTU0NDQ0NDMzMzMzMzIyMjIyMTExMTExMDAwMDAwMDAwLy8vLy8uLi4uLi4uLi0tLS0tLS0tLCwsLCwsLCwrKysrKysrKioqKioqKioqKioqKSk=');
        audio.play();
        
        setTimeout(() => setIsPressed(false), 800);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

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