import React from "react";
import DoubleText from "../../Components/DoubleText";

const About = ({ about }) => {
  return (
    <div>
      <DoubleText text={"about"} />
      {about.map((aboutText) => (
        <p className="text-left  pr-10">{aboutText}</p>
      ))}
    </div>
  );
};

export default About;
