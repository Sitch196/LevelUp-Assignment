import React from "react";
import styled from "styled-components";
import mechanic from "../../assets/mechanic-icon.png";
import arrow from "../../assets/white-down-arrow.png";

function Questions() {
  return (
    <FAQ>
      <EachFAQ>
        <h6>როდის იწყება და რა ფორმატით გაიმართება აქცია?</h6>
        <img src={arrow} alt="" width="20px" />
      </EachFAQ>
      <EachFAQ>
        <h6>როგორ მივიღო აქციაშ მონაწილეობა?</h6>
        <img src={arrow} alt="" width="20px" />
      </EachFAQ>
      <EachFAQ>
        <h6>სხვადასხვა</h6>
        <img src={arrow} alt="" width="20px" />
      </EachFAQ>
    </FAQ>
  );
}

export default Questions;
const FAQ = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const EachFAQ = styled.div`
  padding: 0.6rem 1.2rem;
  color: lightgrey;
  background-color: #2c3234;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
