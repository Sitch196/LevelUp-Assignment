import React from "react";
import styled from "styled-components";
function Additional() {
  return (
    <AdditionalInfo>
      <h3>
        დამატებით შედგება ქეშგეიმის ,ტურნირების და სპინ პოკერის 12 SIDE
        ლიდერბორდი
      </h3>
      <h6 style={{ color: "grey" }}>
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში
      </h6>
    </AdditionalInfo>
  );
}

export default Additional;
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 1rem 1rem;
  padding: 1.2rem;
  color: whitesmoke;
  text-align: center;
  background-color: #2c3234;
  border-radius: 5px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4);
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.1rem;
    left: 50%;
    width: 20%;
    height: 3px;
    box-shadow: 0 0 3px 2px #ef5a21;
    background-color: #ef5a21;
    border-radius: 0 0 20px 20px;
    overflow-x: hidden;
    transform: translateX(-50%);
  }

  @media (width<400px) {
    padding: 1.2rem 3.5rem;
  }
`;
