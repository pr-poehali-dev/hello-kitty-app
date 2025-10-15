import { useEffect, useState } from 'react';

const Index = () => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        
        setIsPressed(true);
        
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzGJ0fPTgjMGHm7A7+OZUQ4PVKzm7bBfGAg+ltryxnMoBSp+zPLaizsIGGS57OihUxENTKXi8LJnGwc2j9XyznwuBSV6yvDekEELFGO25OqlVxIJQJnc8sV2KQUrgs/y2Is4CBhqvOvlm08NDlCn4+60ZSEFN5DV8s19LgUlfMrw35JDCxVlu+Tqp1kUCkCY3fLFdikFK4DM8diKOAgYa7zr5ZxPDg5Qp+DusWQjBjmP1fLNfS8FJXzJ8d+SRA0WZbvk6qdaFApBl93yxXYpBSt/y/LXijoIG2u76+SdUA4OUKPf7LBkIgY5j9TxzH0wBSZ7yfDekUQLFlW35eqmWRQKQJbb8cV1KwYsfsrx14o7CRxqvOrimlEPD1Ck3+yvZCIGOY7U8cx9MAYnecnw3JJFDBdVtuTppFsVCz+T2vHDdiwGLHzJ8NaJOwgdalxP6JlVERERkb+/v9y6r52dbnx8dHl6foaEi4eIj46Tk5eXo6Oho7Kzs7G4t7i3trvBubm5u7W1tbS6urm5tLG2tre5uL/KzMHCz9HT1dPU0s3O0M7MycrMzM3Lz8zOy8jJycjJx8jFxsXDxMXFxMXFxsXEwsPDw8PBwsLCwsHCwcHBwcHBwMDAwMDAwMDAwL+/v7+/v7+/vr++vr69vb28vLy8vLy8u7q7u7u7urq6uro=');
        audio.play();
        
        setTimeout(() => setIsPressed(false), 300);
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
