import React from "react";
import styled from "styled-components";
import Questions from "../SpringSeries/Questions";

function MysticKey() {
  return (
    <TourWrapper>
      <TitleContainer>
        <img
          src="https://promotions.europebet.com/s3/pokerlegendsmalta/img/key-ka.4d5e33e0.png"
          width="330px"
        />
      </TitleContainer>
      <TourContainer>
        <TwoWhole>
          <MistTitle>
            <h6>
              მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
              მიიღებენ საიდუმლო გასაღებს
            </h6>
          </MistTitle>
          <LeaderBoardContainer>
            <LeaderBoards>
              <Num>1</Num>
              <Category>სპეციალური ტურნირი Cashgame Sharks II ადგილი</Category>
            </LeaderBoards>
            <LeaderBoards>
              <Num>2</Num>

              <Category>სპეციალური ტურნირი Cashgame Sharks II ადგილი </Category>
            </LeaderBoards>
            <LeaderBoards>
              <Num>3</Num>

              <Category>სპეციალური ტურნირი Cashgame Sharks II ადგილი</Category>
            </LeaderBoards>
            <LeaderBoards>
              <Num>4</Num>
              <Category>სპეც ტურნირი Cashgame Sharks II ადგილი</Category>
            </LeaderBoards>
            <LeaderBoards>
              <Num>5</Num>
              <Category>Holdem Grinders ლიდერბორდის გამარჯვებული</Category>
            </LeaderBoards>
            <LeaderBoards>
              <Num>6</Num>
              <Category>
                ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები
              </Category>
            </LeaderBoards>
          </LeaderBoardContainer>
        </TwoWhole>
      </TourContainer>
      <h4 style={{ margin: " 1rem 1rem", color: "white" }}>
        წესები და პირობები
      </h4>
      <Questions />
    </TourWrapper>
  );
}

export default MysticKey;

const LeaderBoardContainer = styled.div`
  /* border: 1px solid red; */
  margin: 1rem 1rem;
  padding: 0.6rem;
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-radius: 5px;
`;
const LeaderBoards = styled.div`
  color: whitesmoke;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-items: center;
  border: 1px solid rgba(69, 71, 69, 0.8);
  padding: 0.4rem 0.5rem;
  border-radius: 20px;
  background-color: #1c1d1e;
`;
const Category = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;
const Num = styled.p`
  background-color: #2c3234;
  width: 25px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border-radius: 100%;
  font-size: 0.8rem;
`;
const MistTitle = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
`;
const TourContainer = styled.div`
  padding: 0.2rem 0.4rem;
  background-color: #2c3234;
`;
const TwoWhole = styled.div`
  border-radius: 5px;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.5rem;
  background-color: #1c1d1e;
  @media (width<600px) {
    display: flex;
    flex-direction: column;
  }
`;

const TourWrapper = styled.div`
  border-radius: 10px;
  margin: 1rem 0;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.1rem;
    left: 50%;
    width: 35%;
    height: 2px;
    box-shadow: 0 0 2px 1px #ef5a21;
    background-color: #ef5a21;
    border-radius: 0 0 25px 25px;
    overflow-x: hidden;
    transform: translateX(-50%);
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  color: whitesmoke;
  border-radius: 10px 10px 0 0;
  padding: 1rem 0;
  background-color: #2c3234;
  @media (width<600px) {
    img {
      width: 250px;
    }
  }
`;
