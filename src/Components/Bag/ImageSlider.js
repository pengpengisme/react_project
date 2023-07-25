import React, { useState } from "react"
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        // borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "45%",
        transform: "translate(0, -50%)",
        left: "0px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "45%",
        transform: "translate(0, -50%)",
        right: "0px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 //slides.length是陣列長度，所以slides.length - 1就是最後一張的index，把它存進newIndex再render就是最後一章顯示出來
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <>
            <div style={leftArrowStyles} onClick={goToPrevious}><BiChevronLeft /></div>
            <div style={rightArrowStyles} onClick={goToNext}><BiChevronRight /></div>
            <div className="image_itself" style={slideStyles}>
                {/* images is inside this */}
            </div>
        </>
    )
}

export default ImageSlider;