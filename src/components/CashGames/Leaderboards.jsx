import React from "react";
import styled from "styled-components";
import travelIcon from "../../assets/travel-icon-sm.png";
import ticketIcon from "../../assets/ticket-icon-sm.png";
import travelconBig from "../../assets/travel-icon-big.png";
import ticketIconBig from "../../assets/ticket-icon-big.png";
import gift from "../../assets/gift.png";
function Leaderboards() {
  return (
    <>
      <LeaderBoardTitle>
        <p>ადგილი</p>
        <p>ვაუჩერი</p>
        <p>პრიზი</p>
      </LeaderBoardTitle>
      <LeaderBoardContainer>
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
        <LeaderBoards>
          <Num>7</Num>
          <p>800 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>8</Num>
          <p>800 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>9</Num>
          <p>800 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
        <LeaderBoards>
          <Num>10</Num>
          <p>800 ₾</p>
          <Category>სპეც ტურნირის ბილეთი</Category>
        </LeaderBoards>
      </LeaderBoardContainer>
      <VoucherContainer>
        <EachVoucher>
          <span>
            <img src={travelconBig} alt="travelicon" width="30px" />
          </span>
          <p> The Festival In Malta-ს საგზური</p>
        </EachVoucher>
        <EachVoucher>
          <span>
            <img src={ticketIconBig} alt="travelicon" width="30px" />
          </span>
          <p>
            სპეციალური ტურნირის "Cashgame Sharks" ბილეთი,სადაც გათამაშდება The
            Festival in Malta-ს საგზური
          </p>
        </EachVoucher>
        <EachVoucher>
          <span>
            <img src={gift} alt="travelicon" width="30px" />
          </span>
          <p>ტექნიკის მაღაზიის ვაუჩერი</p>
        </EachVoucher>
      </VoucherContainer>
    </>
  );
}

export default Leaderboards;
const VoucherContainer = styled.div`
  margin: 1rem;
  padding: 0.6rem;
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 5px;
  @media (width<400px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
const EachVoucher = styled.div`
  background-color: #202324;
  font-size: xx-small;
  color: whitesmoke;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0.6rem 0.7rem;
  gap: 5rem;
  border-radius: 10px;
  /* border-left: 6px solid #ef5a21; */
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0.7rem;
    left: 0.1rem;
    width: 2px;
    height: 50%;
    box-shadow: 0px 0 2px 1px #ef5a21;
    background-color: #ef5a21;
    border-radius: 0 25px 25px 0;
    overflow-x: hidden;
    transform: translateX(-50%);
  }
`;
const LeaderBoardTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: gray;
  font-size: small;
  padding: 0.5rem 0;
`;
const LeaderBoardContainer = styled.div`
  margin: 1rem 1rem;
  padding: 0.6rem;
  background-color: #2c3234;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-radius: 5px;
  height: 20rem;
  overflow-x: hidden;
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
  @media (width<400px) {
    padding: 0.58rem 0.5rem;
  }
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
