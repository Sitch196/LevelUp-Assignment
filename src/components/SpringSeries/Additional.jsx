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
  margin: 1rem 1rem;
  padding: 1.2rem;
  color: whitesmoke;
  text-align: center;
  background-color: #2c3234;
  border-radius: 5px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 13rem;
    height: 5px;
    box-shadow: 0 0 2px 2px #ef5a21;
    background-color: #ef5a21;
    border-radius: 20px;
    overflow-x: hidden;
    transform: translateX(-50%);
  }
`;
