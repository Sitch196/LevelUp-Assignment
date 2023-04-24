import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Slider() {
  const [isDragging, setIsDragging] = useState(false);
  const [mouseDownPosition, setMouseDownPosition] = useState(null);
  const [scrollLeftPosition, setScrollLeftPosition] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    setMouseDownPosition({ x: event.clientX, y: event.clientY });
    setScrollLeftPosition(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    event.preventDefault();
    if (isDragging) {
      sliderRef.current.scrollLeft =
        scrollLeftPosition + (mouseDownPosition.x - event.clientX);
    }
  };

  const handleMouseUp = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleMouseLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  return (
    <SliderContainer
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <SliderImage
        src="https://cf.europebet.com/prod/promotions/images/717edec5-083e-405d-97f3-92e8b51a5f23.jpeg"
        draggable="false"
      />
      <SliderImage
        src="https://cf.europebet.com/prod/promotions/images/8eedd7b3-fe70-4bb3-85d9-43786170c0d3.jpeg"
        draggable="false"
      />
      <SliderImage
        src="https://cf.europebet.com/prod/promotions/images/592e8392-f7c5-4ce4-afab-57d3acbd63af.jpeg"
        draggable="false"
      />
      <SliderImage
        src="https://cf.europebet.com/prod/promotions/images/64f7eea0-311f-4fb7-8f56-003366bc6ad5.jpeg"
        draggable="false"
      />
      <SliderImage
        src="https://cf.europebet.com/prod/promotions/images/220a401c-ea91-4411-8e04-aeeebe13acfe.jpeg"
        draggable="false"
      />
    </SliderContainer>
  );
}

export default Slider;
const SliderImage = styled.img`
  width: 25%;
  border-radius: 5px;
`;

const SliderContainer = styled.div`
  margin: 1rem;
  display: flex;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  cursor: grab;
  &::-webkit-scrollbar {
    height: 0;
  }
  &:active {
    cursor: grabbing;
  }
  @media (width <500px) {
    margin-bottom: 6rem;
  }
`;
