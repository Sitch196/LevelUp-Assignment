import React from "react";
import styled from "styled-components";
import label from "../../assets/poker-item-1-ticket-icon.png";

function EachB({ title }) {
  return (
    <EachBContainer>
      <h5> {title}</h5>
      <h6>A კატეგორიის 1 საგზური</h6>
      <h6> B კატეგორიის 1 საგზური</h6>
      <h6 style={{ margin: "0.3rem 0" }}>
        ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾ ბაი-ინის
        გადახდით
      </h6>
      <LabelImg src={label} alt="label" />
    </EachBContainer>
  );
}

export default EachB;
const EachBContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  color: whitesmoke;
  border-radius: 10px;
  padding: 1.5rem;
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
