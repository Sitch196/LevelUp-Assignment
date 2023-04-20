import React from "react";
import styled from "styled-components";
import travelIcon from "../assets/travel-icon-sm.png";
import ticketIcon from "../assets/ticket-icon-sm.png";
import travelconBig from "../assets/travel-icon-big.png";
import ticketIconBig from "../assets/ticket-icon-big.png";
import mechanic from "../assets/mechanic-icon.png";
function Leaderboards() {
  return (
    <>
      <LeaderBoardContainer>
        <LeaderBoardTitle>
          <p>ადგილი</p>
          <p>ვაუჩერი</p>
          <p>პრიზი</p>
        </LeaderBoardTitle>
        <LeaderBoards>
          <Num>1</Num>
          <p>--</p>
          <Category>
            <span>
              <img src={travelIcon} alt="" width="17px" />
            </span>{" "}
            A კატეგორიის საგზური
          </Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>2</Num>
          <p>--</p>
          <Category>
            {" "}
            <span>
              <img src={ticketIcon} alt="" width="17px" />
            </span>{" "}
            B კატეგორიის საგზური
          </Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>3</Num>
          <p>1500 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>4</Num>
          <p>1200 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>5</Num>
          <p>1000 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>6</Num>
          <p>800 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
      </LeaderBoardContainer>
      <VoucherContainer>
        <EachVoucher>
          <span>
            <img src={travelconBig} alt="" width="30px" />
          </span>
          The Festival In Malta-ს საგზური
        </EachVoucher>
        <EachVoucher>
          <span>
            <img src={ticketIconBig} alt="" width="30px" />
          </span>
          სპეციალური ტურნირის "Cashgame Sharks " ბილეთი,სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </EachVoucher>
        <EachVoucher>
          <span>
            <img src={mechanic} alt="" width="30px" />
          </span>
          ტექნიკის მაღაზიის ვაუჩერი
        </EachVoucher>
      </VoucherContainer>
    </>
  );
}

export default Leaderboards;
const VoucherContainer = styled.div`
  /* border: 1px solid red; */
  margin: 1rem;
  padding: 0.6rem;
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 5px;
`;
const EachVoucher = styled.div`
  /* border: 1px solid green; */
  background-color: #1c1d1e;
  font-size: xx-small;
  color: whitesmoke;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0.4rem 0.6rem;
  gap: 5rem;
  border-radius: 10px;
  border-left: 6px solid #ef5a21;
`;
const LeaderBoardTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: gray;
  font-size: small;
`;
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
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(69, 71, 69, 0.8);
  padding: 0.3rem 0.5rem;
  border-radius: 20px;
  background-color: #1c1d1e;
`;
const Category = styled.p`
  font-size: small;
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
