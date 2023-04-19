import React from "react";
import styled from "styled-components";
import Leaderboards from "./Leaderboards";
import Questions from "./Questions";
function CashGames() {
  return (
    <CashContainer>
      <InnerDiv>
        <h3 style={{ color: "whitesmoke" }}>1 ₾ რეიკი = 1 ქულას</h3>
        <InnerInnerDiv>
          <Leaderboards />
          <Leaderboards />
          <>
            <h6 style={{ color: "whitesmoke" }}>
              * ლიდერბორდის შედეგები განახლდება{" "}
              <span style={{ textDecoration: "underline", color: "#ef5a21" }}>
                პოკერის ლობიში
              </span>
            </h6>
          </>
        </InnerInnerDiv>
      </InnerDiv>
      <AdditionalInfo>
        <h3>
          დამატებით შედგება ქეშგეიმის ,ტურნირების და სპინ პოკერის 12 SIDE
          ლიდერბორდი
        </h3>
        <h6 style={{ color: "grey" }}>
          * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში
        </h6>
      </AdditionalInfo>
      <h4 style={{ margin: " 1rem 1rem", color: "white" }}>
        წესები და პირობები
      </h4>
      <Questions />
    </CashContainer>
  );
}

export default CashGames;

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
const CashContainer = styled.div`
  /* border: 1px solid green; */
`;
const InnerDiv = styled.div`
  /* border: 1px solid red; */
  margin: 0 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: #2c3234;
  padding: 0.5rem 0;
`;
const InnerInnerDiv = styled.div`
  /* border: 1px solid white; */
  margin: 0.4rem 0.2rem;
  border-radius: 5px;
  background-color: #1c1d1e;
  padding: 0.4rem 0;
`;
