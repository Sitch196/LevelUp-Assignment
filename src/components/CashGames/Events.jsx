import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Events() {
  const [activeEvent, setActiveEvent] = useState("Cash Games");

  const handleEventClick = (event) => {
    setActiveEvent(event.target.innerText);
  };

  return (
    <EventContainer>
      <EachEvent
        active={activeEvent === "Cash Games"}
        onClick={handleEventClick}
      >
        <StyledLink to="/">Cash Games</StyledLink>
      </EachEvent>
      <EachEvent
        active={activeEvent === "Spring Series"}
        onClick={handleEventClick}
      >
        <StyledLink to="spring">Spring Series</StyledLink>
      </EachEvent>
      <EachEvent
        active={activeEvent === "Final Stage"}
        onClick={handleEventClick}
      >
        <StyledLink to="final">Final Stage</StyledLink>
      </EachEvent>
    </EventContainer>
  );
}

export default Events;

const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2c3234;
  margin: 1.5rem 1rem;
  border-radius: 5px;
  height: 4rem;
`;

const EachEvent = styled.div`
  width: 33.3%;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "inherit")};
  background-color: ${(props) => (props.active ? "#ef5a21" : "inherit")};
  box-shadow: ${(props) => props.active && "0 0 5px #ef5a21"};
`;

const StyledLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  font-size: 0.8rem;
`;
