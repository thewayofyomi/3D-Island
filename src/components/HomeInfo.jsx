import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium text-center sm:text-xl">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="object-contain w-4 h-4" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue">
      Hi, I am <span className="font-semibold">Sean</span> 👋
      <br />A Software Engineer from New York.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with a few companies and picked up many skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Created a few projects over the years."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Are you looking for a developer? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
