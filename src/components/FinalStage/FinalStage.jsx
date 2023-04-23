import React from "react";
import styled from "styled-components";
import Shelf from "./Shelf";
import SmallShelf from "./SmalShelf";
import Tour from "./Tour";
import MysticKey from "./MysticKey";
import Slider from "../CashGames/Slider";
function FinalStage() {
  return (
    <FinalStageWrapper>
      <FestivalWrapper>
        <InnerFestival>
          <MainImg
            src="https://promotions.europebet.com/s3/pokerlegendsmalta/img/final-info-img.d5eff366.jpg"
            alt=""
            width="100%"
          />
          <Title>
            <h5>გაემგზავრე THE FESTIVAL IN MALTA ზე</h5>
            <h6>
              The Festival სერვისის ფარგლებში,ევროპაბეთი უკვე მეორედ აძლევს
              პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს
            </h6>
          </Title>
          <Subtitle>
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </Subtitle>
          <ShelfContainer>
            <Shelf cat="A" />
            <Shelf cat="B" />
            <SmallShelf cat="C" />
          </ShelfContainer>
        </InnerFestival>
      </FestivalWrapper>
      <Tour />
      <MysticKey />
      <h4 style={{ color: "whitesmoke", margin: "0 1rem" }}>მსგავსი აქციები</h4>
      <Slider />
    </FinalStageWrapper>
  );
}

export default FinalStage;
const ShelfContainer = styled.div`
  margin: 1rem;
  border-radius: 5px;
  display: flex;
  gap: 1rem;
  @media (width<700px) {
    display: flex;
    flex-direction: column;
  }
`;
const Subtitle = styled.p`
  color: whitesmoke;
  width: fit-content;
  font-size: 0.8rem;
  text-align: center;
  margin: 0 auto;
  padding: 0.7rem 0.8rem;
  background-color: #2c3234;
  border-radius: 5px;
  @media (width<700px) {
    width: 90%;
  }
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.7rem;
    left: 0.1rem;
    width: 2px;
    height: 55%;
    box-shadow: 0px 0 2px 1px #ef5a21;
    background-color: #ef5a21;
    border-radius: 0 25px 25px 0;
    overflow-x: hidden;
    transform: translateX(-50%);
  }
`;
const Title = styled.div`
  color: whitesmoke;
  text-align: center;
  padding: 0.5rem 0;
`;
const FinalStageWrapper = styled.div`
  margin: 1rem 1rem;
`;
const FestivalWrapper = styled.div`
  padding: 0.3rem;
  background-color: #2c3234;
  border-radius: 5px;
`;
const InnerFestival = styled.div`
  border-radius: 5px;
  padding: 0.6rem;
  background-color: #1c1d1e;
`;
const MainImg = styled.img`
  border-radius: 10px;
`;
