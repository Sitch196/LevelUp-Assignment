import React from "react";
import Leaderboards from "./Leaderboards";
import exampleIcon from "../assets/example-icon.png";
import styled from "styled-components";
import mechanic from "../assets/mechanic-icon.png";
function ItemDiv() {
  return (
    <InnerDiv>
      <h4 style={{ color: "whitesmoke" }}>
        მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
      </h4>
      <InnerInnerDiv>
        <Score style={{ color: "whitesmoke" }}>
          <InnerScore>
            <p style={{ fontSize: ".8rem" }}>ქულების დაგროვების მექანიკა</p>
            <img src={mechanic} alt="exampicon" width="23px" />
          </InnerScore>
        </Score>
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
  );
}

export default ItemDiv;
const InnerScore = styled.div`
  border: 1px solid rgba(69, 71, 69, 0.8);
  display: flex;
  gap: 0.5rem;
  padding: 0 0 0 0.4rem;
  border-radius: 20px;
`;
const Score = styled.div`
  display: flex;
  justify-content: center;
`;
const InnerDiv = styled.div`
  margin: 0 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: #2c3234;
  padding: 0.5rem 0;
`;
const InnerInnerDiv = styled.div`
  margin: 0.4rem 0.2rem;
  border-radius: 5px;
  background-color: #1c1d1e;
  padding: 0.4rem 0;
`;
const Leaders = styled.div``;
