import React from "react";
import styled from "styled-components";
import Leaderboards from "./Leaderboards";
import Questions from "../SpringSeries/Questions";
import exampleIcon from "../../assets/example-icon.png";
import Additional from "../SpringSeries/Additional";

function CashGames() {
  return (
    <CashContainer>
      <InnerDiv>
        <h3 style={{ color: "whitesmoke" }}>1 ₾ რეიკი = 1 ქულას</h3>
        <InnerInnerDiv>
          <Exclam>
            <h5 style={{ color: "whitesmoke" }}>
              ჰოლდემის TOP20 ლიდერბორდი{" "}
              <img src={exampleIcon} alt="exampicon" width="17px" />
            </h5>
          </Exclam>
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
      <Additional />
      <h4 style={{ margin: " 1rem 1rem", color: "white" }}>
        წესები და პირობები
      </h4>
      <Questions />
    </CashContainer>
  );
}

export default CashGames;

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
const Exclam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CashContainer = styled.div`
  /* border: 1px solid green; */
`;
