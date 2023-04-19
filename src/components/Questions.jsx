import React from "react";
import styled from "styled-components";
import mechanic from "../assets/mechanic-icon.png";

function Questions() {
  return (
    <FAQ>
      <EachFAQ>
        <h5>როდის იწყება და რა ფორმატით გაიმართება აქცია?</h5>
        <img src={mechanic} alt="" width="30px" />
      </EachFAQ>
      <EachFAQ>
        <h5>როგორ მივიღო აქციაშ მონაწილეობა?</h5>
        <img src={mechanic} alt="" width="30px" />
      </EachFAQ>
      <EachFAQ>
        <h5>სხვადასხვა</h5>
        <img src={mechanic} alt="" width="30px" />
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
  padding: 1.2rem;
  color: lightgrey;
  background-color: #2c3234;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
