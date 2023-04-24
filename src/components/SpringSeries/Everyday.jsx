import React from "react";
import styled from "styled-components";
function Everyday() {
  return (
    <EverydayContainer>
      <InnerEveryDay>
        <h4 style={{ padding: ".5rem 0 0 0" }}>
          ყოველდღური ტურნირები და სატელიტები
        </h4>
        <UpperTwo>
          <Image1>
            <TournamentContainer>
              <EachT>
                <p>Holdem Highrollers</p>
                <Money>50 000 ₾</Money>
              </EachT>
              <EachT>
                <p>ბაი-ინი - 550</p>
                <DateCover>27 აპრილი</DateCover>
              </EachT>
            </TournamentContainer>
          </Image1>
          <Image2>
            <TournamentContainer>
              <EachT>
                <p>Omaha Highrollers</p>
                <Money>50 000 ₾</Money>
              </EachT>
              <EachT>
                <p>ბაი-ინი - 550</p>
                <DateCover>28 აპრილი</DateCover>
              </EachT>
            </TournamentContainer>
          </Image2>
        </UpperTwo>
        <Down>
          <Image3>
            <MainEvent>
              <EachE>
                <p>Main Events</p>
                <Money>150 000</Money>
              </EachE>
              <EachE>
                <p> ბაი-ინი 550₾</p>
                <DateCover1>29 აპრილი</DateCover1>
              </EachE>
            </MainEvent>
          </Image3>
        </Down>
      </InnerEveryDay>
    </EverydayContainer>
  );
}

export default Everyday;
const MainEvent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
`;
const EachE = styled.div`
  font-weight: bold;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;
const DateCover1 = styled.p`
  background-color: #d7c860;
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
  color: #2d5d53;
  font-size: 0.75rem;
  font-weight: bold;
`;
const TournamentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.9rem;
`;
const EachT = styled.div`
  font-weight: bold;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;
const DateCover = styled.p`
  background-color: #b78648;
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;
`;
const Money = styled.p`
  font-size: 1.4rem;
  color: gold;
`;
const Image1 = styled.div`
  width: 50%;
  background-image: url("https://promotions.europebet.com/s3/pokerlegendsmalta/img/tournament-bg.2f4d8690.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  @media (width<600px) {
    width: 100%;
    border-radius: 5px;
  }
`;
const Image2 = styled.div`
  width: 50%;
  height: 5rem;
  background-image: url("https://promotions.europebet.com/s3/pokerlegendsmalta/img/tournament-bg.2f4d8690.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  @media (width<600px) {
    width: 100%;
    border-radius: 5px;
  }
`;
const UpperTwo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  @media (width<600px) {
    display: flex;
    flex-direction: column;
  }
`;

const Down = styled.div`
  display: flex;
  padding: 0.5rem;
`;
const Image3 = styled.div`
  width: 100%;
  height: 5rem;
  background-image: url("https://promotions.europebet.com/s3/pokerlegendsmalta/img/main-bg-sm.2fadcb96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;
const EverydayContainer = styled.div`
  margin: 1rem;
  background-color: #2c3234;
  padding: 0.2rem;
  border-radius: 5px;
`;
const InnerEveryDay = styled.div`
  text-align: center;
  border-radius: 5px;
  background-color: #1c1d1e;
  color: whitesmoke;
`;
