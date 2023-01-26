import React from "react";
import onestop from "../../images/one-stop.png";
import transparency from "../../images/transparency.svg";
import insurance from "../../images/travel-insurance.svg";
import thirdparty from "../../images/third-party.svg";

const SecretSauce = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className=" font-semibold text-accent text-[19px] lg:text-[29px] mb-8">
        Wander On's Secret Sauce
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col justify-center items-center">
          <img
            src={thirdparty}
            className="lg:h-[6vw] h-[64px] mb-4"
            alt="third_party"
          />
          <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px] px-10">
            No Third Party Mess
          </h1>
          <p className="text-accent font-normal  text-[11px] lg:text-[18px] leading-6">
            All the trips at WanderOn are managed end to end by our in-house
            operations team. There are no third parties involved and hence no
            fishy claims. So when we say your travel plan is 100% our
            responsibility, we mean it.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src={transparency}
            className="lg:h-[6vw] h-[64px] mb-4"
            alt="transparency"
          />
          <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px] px-10">
            Transparency & Security
          </h1>
          <p className="text-accent font-normal  text-[11px] lg:text-[18px] leading-6">
            All the Itineraries are backed up by a strong ground team that
            monitors every route and condition real time. This ensures
            transparency and solidifies the security measures for all our
            travelers.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src={insurance}
            className="lg:h-[6vw] h-[64px] mb-4"
            alt="insurance"
          />
          <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px] px-10">
            Co-travellers Filtering
          </h1>
          <p className="text-accent font-normal  text-[11px] lg:text-[18px] leading-6">
            Group trips are fun when you have like-minded fellow travelers. We
            assure that through a well-defined filtering process at all the
            stages, beginning from marketing, sales to operations.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <img
            src={onestop}
            className="lg:h-[6vw] h-[64px] mb-4"
            alt="third_party"
          />
          <h1 className="text-accent font-semibold  text-[13px] lg:text-[22px] px-10">
            One stop hassle free experience
          </h1>
          <p className="text-accent font-normal  text-[11px] lg:text-[18px] leading-6">
            Our entire team puts rigorous efforts on ground to make sure your
            experience is a top notch one. Awesome stays, friendly drivers,
            hospitable ground staff is ready to make your trip the most
            memorable for lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecretSauce;
