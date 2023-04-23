import React from "react";
import styled from "styled-components";
import ticket from "../../assets/final-item-ticket-icon.png";
import chip from "../../assets/final-item-event-icon.png";
import hotel from "../../assets/final-item-hotel-icon.png";
import money from "../../assets/final-item-money-icon.png";
function Shelf({ cat }) {
  return (
    <div>
      <EachShelf>
        <SmallTitle>{cat} კატეგორიის საგზურში შედის</SmallTitle>
        <Drawer>
          <img src={ticket} alt="ticket" width="24px" />
          <SmallP>ორმხრივი ავიაბილეთი</SmallP>
        </Drawer>
        <Drawer>
          <img src={chip} alt="ticket" width="24px" />
          <SmallP>The Festival in Maltas-ს მეინ ივენთის ბაი-ინი</SmallP>
        </Drawer>
        <Drawer>
          <img src={chip} alt="ticket" width="24px" />
          <SmallP>Holdem ან Omaha ჰაიროლერის ბაი-ინი</SmallP>
        </Drawer>
        <Drawer>
          <img src={hotel} alt="ticket" width="24px" />
          <SmallP>სასტუმრო Golden Tulip Vivaldi Hotel</SmallP>
        </Drawer>
        <Drawer>
          <img src={money} alt="ticket" width="24px" />
          <SmallP>€500 სახარჯი ფული</SmallP>
        </Drawer>
      </EachShelf>
    </div>
  );
}

export default Shelf;
const SmallP = styled.p`
  font-size: 0.59rem;
  font-weight: bold;
`;
const SmallTitle = styled.p`
  @media (width<700px) {
    padding: 0.5rem 0;
  }
  font-size: 0.7rem;
  font-weight: bold;
`;
const EachShelf = styled.div`
  color: whitesmoke;
  padding: 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  background-color: #2c3234;
  border-radius: 10px;
`;
const Drawer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.5rem;
  border-radius: 10px;
  background-color: #1c1d1e;
`;
