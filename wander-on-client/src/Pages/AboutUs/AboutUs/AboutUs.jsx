import React from "react";
import AboutUsBanner from "../AboutUsBanner";
import Team from "../Team";
import Values from "../Values";
import captains from "../../../images/captains.svg";
import vendor from '../../../images/vendors.svg'
import transport from '../../../images/transportation.svg'
import tvs from '../../../images/tvs.png'
import concentrix from '../../../images/concentrix.svg'
import springworks from '../../../images/springworks.png'
import paytm from '../../../images/paytm.svg'

const AboutUs = () => (
  <div className="space-y-10">
    <AboutUsBanner />
    <div className=" text-accent container mx-auto px-4 md:px-0">
      <h2 className="text-[5vw] lg:text-[2vw] font-semibold py-8">
        What do we stand for and how did we reach to it?
      </h2>
      <p className="text-[3vw] lg:text-[1.1vw] lg:px-[20vw] text-left">
        Remember the days when we used to fill our slam-books with career
        aspirations like scientist, teacher and doctor? Nobody at that time
        thought there could’ve been a career in Travelling, let alone being a
        travelpreneur! But as life happens, you understand that a career could
        be anything where you can be a problem-solver for the society.
        <br /> And that’s how a few engineers from NIT Kurukshetra found that
        the travel industry in India needed a fresh burst of young energy! The
        need of the hour was to convert a dispersed agent based model to a more
        friendly ,transparent and an accessible community for Indian travellers,
        and hence WanderOn. Let’s have a closer look at the hustlers who’re on a
        mission to stir up people’s life with memorable experiences.
      </p>
    </div>
    <Team />
    <Values />
    <h1 className="text-[5vw] lg:text-[2vw] px-[12vw] font-semibold lg:pt-8">
      Our WARRIORS who have helped us build this holistic community
    </h1>
    <div className="flex flex-col md:flex-row container mx-auto px-4 md:px-0 gap-10">
      <div className="flex flex-col justify-center items-center">
        <img src={captains} className="h-[15vw] lg:h-[5vw]" alt="" />
        <h2 className="text-[29px] font-semibold">Trip Captains</h2>
        <p className="text-[14px] font-extralight pt-4 text-left px-8">
          Our trip captains are nothing short of heroes. Brave, dynamic, and
          great leaders, they're certainly the showrunners of the community
          trips. They've been handpicked from India's best travel institutes,
          and know all tricks of trade to lead and manage all kinds of trips,
          including biking and trekking expeditions.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={vendor} className="h-[15vw] lg:h-[5vw]" alt="" />
        <h2 className="text-[29px] font-semibold">Local Vendors</h2>
        <p className="text-[14px] font-extralight pt-4 text-left px-8">
          Being the bridge between the local vendors and the customers, we’re
          very selective about the former. After a rigorous recci, we’ve found
          the most kind and hospitable vendors, who make our travelers feel at
          home, even when they might be miles away from it. Over the period of
          time, we’ve managed to make a family-like relationship with our
          vendors, thus giving back to the local community in every way possible
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={transport} className="h-[15vw] lg:h-[5vw]" alt="" />
        <h2 className="text-[29px] font-semibold">Transport Drivers</h2>
        <p className="text-[14px] font-extralight pt-4 text-left px-8">
          We understand the responsibility of taking utmost care of our
          travelers when they’re off to experience the toughest terrains of the
          country. Hence everything depends on the competency of our drivers.
          All the drivers at WanderOn are local professionals, who’ve been in
          practice since years, and we assure that they know all nooks and
          corners of the roads by heart!
        </p>
      </div>
    </div>
    <h1 className="text-[5vw] lg:text-[2vw] font-semibold lg:py-8">BRANDS who trust us</h1>
    <div className="grid grid-cols-4 place-items-center gap-6 container mx-auto px-4 md:px-0">
      <img className="h-[6vw] lg:h-[4vw]" src={tvs} alt="" />
      <img className="h-[6vw] lg:h-[4vw]" src={concentrix} alt="" />
      <img className="h-[6vw] lg:h-[4vw]" src={springworks} alt="" />
      <img className="h-[6vw] lg:h-[4vw]" src={paytm} alt="" />
    </div>
  </div>
);

export default AboutUs;
