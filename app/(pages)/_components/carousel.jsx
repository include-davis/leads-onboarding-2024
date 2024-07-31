import styles from '@/app/(pages)/_styles/components/carousel.module.scss'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = [1, 2, 3, 4, 5, 7, 9]
const middle_index = Math.ceil(slides.length / 2) - 1;

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(middle_index)
  
  function nextSlide() {
    const next = currentSlide + 1;
    
    setCurrentSlide(next <= slides.length - 1 ? next : 0);
  }

  function previousSlide() {
    const previous = currentSlide - 1;

    setCurrentSlide(previous >= 0 ? previous : slides.length - 1);
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.slider}>
        <div className={styles.slides}>
          <FaArrowLeft className={styles.arrow} onClick={previousSlide}/>
          {slides.map((slide, key) => 
            <Slide 
              key={key} 
              idx={key} 
              slide={slide} 
              currentSlide={currentSlide}
            />
          )}
          <FaArrowRight className={styles.arrow} onClick={nextSlide}/>
        </div>
        <div className={styles.dots}>
          {slides.map((_, key) => 
          <Dot 
              key={key} 
              idx={key}
              currentSlide={currentSlide} 
              handleClick={() => setCurrentSlide(key)}
            />
          )}
        </div>
      </div>
      
    </div>
  );
}

function Dot({idx, currentSlide, handleClick}) {
  
  function handleDotStyle() {
    if(currentSlide === idx) {
      return `${styles.dot_active}`;
    } 
      
    return `${styles.dot}`;
  }
  
  return (
      <div className={handleDotStyle()} onClick={handleClick}></div>
  );
}

function Slide({slide, idx, currentSlide}) {
  
  function handleSlideStyle() {
    if(currentSlide === idx) {
      return `${styles.slide}`;
    } 
    else if(Math.abs(currentSlide - idx) == 1) {
      return `${styles.slide_adjacent}`;
    }
    else if(Math.abs(currentSlide - idx) == 2) {
      return `${styles.slide_two_away}`;
    }
      
    return `${styles.slide_hidden}`;
  }
  
  return (
    <div className={handleSlideStyle()}>
      <>{slide}</>
    </div>
  );
}