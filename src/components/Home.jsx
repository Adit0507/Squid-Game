import React from "react";
import styled from "styled-components";
import HeroImage from "../assets/HERO.jpg";
import backgroundColor from "../utils/colors";
import Squid from "../assets/SQUID.png";
import Game from "../assets/GAME.png";

export const Home = () => {
  return (
    <Section id="hero">
      <div className="navbar">
        <div className="brand">
          <div className="circle pink"></div>
          <div className="triangle white">
            <div className="inner"></div>
          </div>
          <div className="square pink"></div>
        </div>
        <ul className="links">
          <li>
            <a href="#info">Info</a>
          </li>
          <li>
            <a href="#episodes">Episdoes</a>
          </li>
          <li>
            <a href="#videos">Videoes</a>
          </li>
          <li>
            <a href="#details">Details</a>
          </li>
        </ul>
      </div>
      <div className="image">
        <img src={HeroImage} alt="HeroImahe" />
        <div className="title">
          <img src={Squid} alt="" />
          <img src={Game} alt="" />
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
    display:grid;
    grid-template-columns: 40% 60%;
    .navbar {
        margin: 3rem 0 0 4rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        .brand{
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
        }
    }


`