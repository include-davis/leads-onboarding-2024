"use client";
import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"

type ImageSliderProps = {
    imageUrls: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)
  
    function showNextImage() {
      setImageIndex(index => {
        if (index === images.length - 1) return 0
        return index + 1
      })
    }
  
    function showPrevImage() {
      setImageIndex(index => {
        if (index === 0) return images.length - 1
        return index - 1
      })
    }

    return (
        <div>
            <img src={imageUrls[imageIndex]}/>
            
            <button
                onClick={showPrevImage}
                className="img-slider-btn"
                style={{ left: 0 }}
                aria-label="View Previous Image">
                <ArrowBigLeft aria-hidden />
            </button>
        
            <button
                onClick={showNextImage}
                className="img-slider-btn"
                style={{ right: 0 }}
                aria-label="View Next Image">
                <ArrowBigRight aria-hidden />
            </button>
        </div>
    )
}

export default ImageSlider;