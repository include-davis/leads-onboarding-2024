import styles from '@/app/(pages)/_styles/components/carousel.module.scss'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const slides = [1, 2, 3, 4, 5, 6, 7];

// Get an extended version of the slides to peek make an infinite scroll
function extendSlides(slides) {
  const first = slides[0];
  const last = slides.at(-1);
  // const last = slides[slides.length - 1];
    
  const second = slides[1 % slides.length];
  const second_to_last = slides.at(-2);
  // const second_to_last = slides[(slides.length - 2 + slides.length) % slides.length];
    
  const initial = [second_to_last, last, ...slides, first, second]; // buffer slides to peek

  return initial;
}

export default function Carousel() {
  
  const [extendedSlides, setExtendedSlides] = useState(extendSlides(slides));
  const middle_index = Math.ceil(extendedSlides.length / 2) - 1;

  const [currentSlide, setCurrentSlide] = useState(middle_index)
  
  function nextSlide() {
    // const current = currentSlide;
    // const next = (currentSlide + 1) % slides.length;
    
    // setCurrentSlide(next);
     
    // Remove first and add one to the end
    const last_idx = slides.indexOf(extendedSlides.at(-1))
    // const last_idx = slides.indexOf(extendedSlides[extendedSlides.length - 1])
    const new_last_slide = slides[(last_idx + 1) % slides.length]
    
    setExtendedSlides([...extendedSlides.slice(1), new_last_slide]);
        
  }

  function previousSlide() {
    // const current = currentSlide;
    // const previous = (currentSlide - 1 + slides.length) % slides.length;

    // setCurrentSlide(previous);
    
    // Remove last and add to one to the beginning
    const first_idx = slides.indexOf(extendedSlides[0]);
    const new_first_slide = slides[(first_idx - 1 + slides.length) % slides.length];

    setExtendedSlides([new_first_slide, ...extendedSlides.slice(0, -1)])

    // setCurrentSlide(current);
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.slider}>
        <div className={styles.slides}>
          <FaArrowLeft className={styles.arrow} onClick={previousSlide}/>
          {extendedSlides.map((slide, key) => 
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
          {extendedSlides.map((_, key) => 
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