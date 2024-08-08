import { useState } from "react"
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"

type ImageSliderProps = {
    imageUrls: string[];
}

export function ImageSlider({ imageUrls }:ImageSliderProps) {
    const[imageIndex, setImageIndex] = useState(0)

    return (
        <div>
            <img src={imageUrls[imageIndex]}/>
            
            <button>
                <ArrowBigLeft/>
            </button>

            <button>
                <ArrowBigRight/>
            </button>
        </div>
    )
}