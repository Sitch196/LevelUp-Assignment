import React from "react";
import styled from "styled-components";
import Leaderboards from "./Leaderboards";
import Questions from "../SpringSeries/Questions";
import exampleIcon from "../../assets/example-icon.png";
import Additional from "../SpringSeries/Additional";
import Slider from "./Slider";
function CashGames() {
  return (
    <CashContainer>
      <InnerDiv>
        <h3 style={{ color: "whitesmoke", padding: ".5rem 0" }}>
          1 ₾ რეიკი = 1 ქულას
        </h3>
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
              <span
                style={{
                  textDecoration: "underline",
                  color: "#ef5a21",
                  cursor: "pointer",
                }}
              >
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
      <h4 style={{ color: "whitesmoke", margin: "0 1rem" }}>მსგავსი აქციები</h4>

      <Slider />
    </CashContainer>
  );
}

export default CashGames;

const InnerDiv = styled.div`
  margin: 0 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: #2c3234;
  padding: 0.5rem 0;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.1rem;
    left: 50%;
    width: 20%;
    height: 2px;
    box-shadow: 0 0 3px 2px #ef5a21;
    background-color: #ef5a21;
    border-radius: 0 0 20px 20px;
    overflow-x: hidden;
    transform: translateX(-50%);
  }
`;
const InnerInnerDiv = styled.div`
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
