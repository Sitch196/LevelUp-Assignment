import React from "react";
import styled from "styled-components";
import leftcard from "../../assets/promo-left-img.png";
import rightcard from "../../assets/promo-right-img.png";
import ItemDiv from "./ItemDiv";
import Everyday from "./Everyday";
import Additional from "./Additional";
import Questions from "./Questions";
import Slider from "../CashGames/Slider";
function SpringSeries() {
  return (
    <SpringContainer>
      <Satelite>
        <InnerSatelite>
          <h3>ტურნირები და სატელიტები</h3>
          <Advert>
            <CardImage src={leftcard} alt="" width="130px" height="120px" />
            <Text>
              <h5>სერიის ფარგლებში ყოველდღიურად გაიმართება 3 ივენთი:</h5>
              <Date>19:00 / 19:30 / 20:00</Date>
              <h6 style={{ color: "gray" }}>
                * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან <br />
                ტურნირების სრული განრიგის სანახავად გადადი <br /> პოკერის ლობიში
              </h6>
              <LobyBtn>პოკერის ლობი</LobyBtn>
            </Text>
            <CardImage src={rightcard} alt="" width="130px" height="120px" />
          </Advert>
        </InnerSatelite>
      </Satelite>
      <ItemDiv />
      <Everyday />
      <Additional />
      <h4 style={{ margin: " 1rem 1rem", color: "white" }}>
        წესები და პირობები
      </h4>
      <Questions />
      <h4 style={{ color: "whitesmoke", margin: "0 1rem" }}>მსგავსი აქციები</h4>

      <Slider />
    </SpringContainer>
  );
}

export default SpringSeries;

const Date = styled.p`
  border: 2px solid #ef5a21;
  padding: 0 0.2rem;
  border-radius: 5px;
  font-size: small;
  box-shadow: inset 0 0 2px 0 #ef5a21;
  @media (width<400px) {
    font-size: 0.6rem;
    padding: 0.1rem 0.3rem;
  }
`;
const CardImage = styled.img`
  position: relative;
  top: 2.1rem;
  @media (width<500px) {
    width: 90px;
    height: 80px;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  @media (width<400px) {
    font-size: xx-small;
  }
`;
const LobyBtn = styled.button`
  background-color: #ef5a21;
  border: none;
  margin-bottom: 0.4rem;
  width: 7rem;
  border-radius: 2px;
  color: whitesmoke;
  padding: 0.2rem 0;
  font-weight: bold;
  @media (width<400px) {
    font-size: 0.7rem;
  }
`;

const Advert = styled.div`
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-between;
  background-color: #1c1d1e;
  border-radius: 7px;
  margin-top: 0.6rem;
`;
const SpringContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Satelite = styled.div`
  margin: 1rem;
  padding: 1rem 0.2rem 0 0.2rem;
  border-radius: 5px;
  background-color: #2c3234;
`;
const InnerSatelite = styled.div`
  text-align: center;
  color: whitesmoke;
`;
