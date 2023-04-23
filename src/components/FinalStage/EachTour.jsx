import React from "react";
import styled from "styled-components";
import label from "../../assets/poker-item-1-ticket-icon.png";
function EachTour({ title }) {
  return (
    <EachTourContainer>
      <h5>{title}</h5>
      <h6>1 საგზური</h6>
      <LabelImg src={label} alt="label" />
    </EachTourContainer>
  );
}

export default EachTour;
const EachTourContainer = styled.div`
  color: whitesmoke;
  padding: 1.8rem 1rem;
  border-radius: 10px;
  background-color: #1e2122;
  position: relative;
`;

const LabelImg = styled.img`
  position: absolute;
  top: 1rem;
  right: -1rem;
  transform: translate(-50%, -50%);
  @media (width<500px) {
    position: absolute;
    top: 1.3rem;
    right: -1rem;
    transform: translate(-50%, -50%);
  }
`;
