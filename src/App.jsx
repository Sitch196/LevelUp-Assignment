import styled from "styled-components";
import banner from "./assets/banner.jpg";
import "./app.css";
import CashGames from "./components/CashGames/CashGames";
import Events from "./components/CashGames/Events";
import { Route, Routes } from "react-router-dom";
import SpringSeries from "./components/SpringSeries/SpringSeries";
import FinalStage from "./components/FinalStage/FinalStage";
import Header from "./Header";

function App() {
  return (
    <BigWrapper>
      <Main>
        <Header />
        <ParentHead>
          <Wrapper>
            <Dates>
              <p
                style={{
                  backgroundColor: "#3f484b",
                  padding: "0.2rem 0.4rem",
                  borderRadius: "10px",
                }}
              >
                სლოტები
              </p>
              <p
                style={{
                  backgroundColor: "#1c1d1e",
                  padding: "0.2rem 0.4rem",
                  borderRadius: "10px",
                }}
              >
                10 იანვარი - 12 მარტი
              </p>
            </Dates>
          </Wrapper>
          <X>
            <p>x</p>
          </X>
          <Headerpic src={banner} alt="" />
        </ParentHead>

        <div style={{ padding: "0 1rem" }}>
          <h4 style={{ color: "whitesmoke" }}>
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </h4>
          <h5 style={{ color: "gray" }}>მოხვდი პოკერის ფესტივალზე მალტაში</h5>
        </div>
        <EventRoutes>
          <Events />
          <Routes>
            <Route path="/" element={<CashGames />} />
            <Route path="spring" element={<SpringSeries />} />
            <Route path="final" element={<FinalStage />} />
          </Routes>
        </EventRoutes>
        <Footer>
          <Btn>ითამაშე</Btn>
        </Footer>
      </Main>
    </BigWrapper>
  );
}

export default App;
const ParentHead = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.4rem;
  color: whitesmoke;
  font-size: small;
  font-weight: bold;
  @media (width<600px) {
    display: none;
  }
`;
const Dates = styled.div`
  display: flex;
  padding: 0.1rem;
  background-color: #1c1d1e;
  border-radius: 10px;
  font-size: 0.7rem;
`;
const X = styled.div`
  position: absolute;
  right: 0.4rem;
  top: 1rem;
  color: whitesmoke;
  background-color: #2c3234;
  border-radius: 50%;
  cursor: pointer;
  p {
    padding: 0.07rem 0.5rem;
    border-radius: 50%;
  }
  @media (width<600px) {
    display: none;
  }
`;

const Btn = styled.button`
  background-color: #ef5a21;
  border: none;
  padding: 0.3rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  color: whitesmoke;
  cursor: pointer;
`;
const Footer = styled.div`
  margin-top: 4rem;
  border-top: 3px solid #ef5a21;
  padding: 1rem;
  width: 45rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  background-color: #1c1d1e;
  @media (width<400px) {
    width: 100%;
  }
`;
const EventRoutes = styled.div``;
const BigWrapper = styled.div`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Main = styled.div`
  border-radius: 5px;
  width: 45rem;
  background-color: #1c1d1e;

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #2c3234;
  }

  *::-webkit-scrollbar-thumb {
    background: #ef5a21;
    border-radius: 5px;
    height: 2rem;
  }
`;
const Headerpic = styled.img`
  width: 100%;
  border-radius: 5px;
`;
