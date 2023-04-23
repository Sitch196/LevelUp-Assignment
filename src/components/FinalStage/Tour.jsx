import React from "react";
import styled from "styled-components";
import EachTour from "./EachTour";
import EachB from "./EachB";

function Tour() {
  return (
    <TourWrapper>
      <TitleContainer>
        <h4>მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე</h4>
      </TitleContainer>
      <TourContainer>
        <TwoWhole>
          <Clown>
            <EachTour title='"Cashgame Highrollers"' />
            <EachTour title='"Cashgame Grinders"' />
            <EachTour title='"Tournament Sharks"' />
          </Clown>
          <Clown>
            <EachB title='"The Festival in Malta GTD"' />
            <EachB title='"The Lord of the Rings "' />
          </Clown>
        </TwoWhole>
        <Description>
          <h6>
            *თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ,ის The Lord of the Rings
            ტურნირზე მოხვდება ბეჭდების შესაბამისი რაოდენობის სტეიკით
          </h6>
          <h6>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით
          </h6>
        </Description>
      </TourContainer>
    </TourWrapper>
  );
}

export default Tour;
const TourContainer = styled.div`
  padding: 0.2rem 0.4rem;

  background-color: #2c3234;
`;
const TwoWhole = styled.div`
  display: flex;
  gap: 0.6rem;
  padding: 0.5rem;
  background-color: #1c1d1e;
  @media (width<600px) {
    display: flex;
    flex-direction: column;
  }
`;
const Clown = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.6rem;
  @media (width<600px) {
    width: 100%;
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
const Description = styled.div`
  padding: 1rem 0;
  text-align: center;
  color: lightgrey;
`;
const TitleContainer = styled.div`
  text-align: center;
  color: whitesmoke;
  border-radius: 10px 10px 0 0;
  padding: 1rem 0;
  background-color: #2c3234;
`;
