import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Events() {
  const [activeEvent, setActiveEvent] = useState("Cash Games"); // add state variable to track active event

  // handler function to set the active event when a button is clicked
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
  /* width: 40rem; */
  background-color: #2c3234;
  margin: 1.5rem 1rem;
  border-radius: 5px;
`;

const EachEvent = styled.div`
  /* border: 1px solid green; */
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "inherit")};
  background-color: ${(props) => (props.active ? "#ef5a21" : "inherit")};
  transform: ${(props) => props.acitve && "scale(1.1)"};
`;

const StyledLink = styled(Link)`
  color: whitesmoke;
  /* font-weight: bold; */
  text-decoration: none;
`;
