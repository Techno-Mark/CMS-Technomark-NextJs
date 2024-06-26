"use client"
import React, { useEffect, useState } from 'react';

const TypingAnimation: React.FC = () => {
  const totype: string[] = [
    "",
    "",
    "",
    "Ecommerce",
    "",
    "IoT-app",
  ];

  const [typedText, setTypedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setTypedText(prevText => prevText + totype[currentIndex][charIndex]);
        setCharIndex(prevIndex => prevIndex + 1);
        if (charIndex === totype[currentIndex].length - 1) {
          setIsTyping(false);
        }
      } else {
        setTypedText(prevText => prevText.slice(0, -1));
        setCharIndex(prevIndex => prevIndex - 1);
        if (charIndex === 0) {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totype.length);
        }
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <>
      {/* <span id="typed" className='main-title'>{typedText}</span> */}
      <div className="text">
        <div className="wrapper">
          <p className='main-title'>Enterprise Software</p>
          <p className='main-title'>Web & mobile applications</p>
          <p className='main-title'>Cloud Native</p>
          <p className='main-title'>Ecommerce</p>
          <p className='main-title'>Blockchain</p>
          <p className='main-title'>IoT-app</p>
        </div>
      </div> 
    </>
  );
}

export default TypingAnimation;
