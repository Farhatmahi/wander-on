import React from "react";
import DoubleText from "../../Components/DoubleText";

const Highlights = ({ highlights }) => {
  return (
    <div>
      <DoubleText text={"highlights"} />
      <ul>
        {highlights.map((aboutText) => (
          <li className="text-left  pr-10 list-disc">{aboutText}</li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;
<DoubleText text={"about"} />;
