"use client";
import React, { useState } from 'react';
import {ArrowBigLeft, ArrowBigRight} from "lucide-react";
import styles from '../../_styles/days/day2.module.scss';
// import styles from '../_styles/days/day2.module.scss';

const images = [
    "/bloom.png",
    "/one.png",
    '/viet.png',
    '/tutor.png',
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const length = 3;
  const handlePrevious = () => {
    const newIndex = index - 1;
   setIndex(newIndex < 0 ? length - 1 : newIndex);
  };
  
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  
  return (
    <div className="carousel">
      <button onClick={handlePrevious}>
        <ArrowBigLeft aria-hidden />
      </button>

      <img src={images[index]} alt={`Slide ${index}`} />

      <button onClick={handleNext}>
        <ArrowBigRight aria-hidden />
    </button>

      <p>{index + 1} / {length}</p> {/* Optional: Show the current slide number */}
    </div>
  );
};

export default Carousel;