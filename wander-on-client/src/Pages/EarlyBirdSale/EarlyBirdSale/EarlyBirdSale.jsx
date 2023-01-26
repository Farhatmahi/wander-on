import React from "react";
import SecretSauce from "../../Home/SecretSauce";
import Testimonial from "../../Home/Testimonial";
import EarlyBirdBanner from "../EarlyBirdBanner";
import howItWorks from "../../../images/how-it-works.svg";
import discount from "../../../images/discount.svg";
import rupee from "../../../images/rupee.svg";
import EarlyBirdTrips from '../../../Pages/Home/EarlyBirdTrips';
import Faqs from "../Faqs";

const EarlyBirdSale = () => {
  return (
    <div className="space-y-14">
      <EarlyBirdBanner />
      {/* icon with text  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4 md:px-0">
        <div className="flex flex-col justify-start items-center">
          <img src={howItWorks} className="h-[14vw] md:h-[6vw]" alt="" />
          <h2 className="text-[3.5vw] md:text-[1.5vw] font-semibold">
            How it works?
          </h2>
          <p className="text-[3vw] md:text-[1.25vw]">
            Let's say Modiji wishes to go to Spiti in 2023. The regular price of
            the trip is 19,999. He purchases a 10K voucher, which has locked his
            trip at a discounted price of 14,999.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <img src={discount} className="h-[14vw] md:h-[6vw]" alt="" />
          <h2 className="text-[3.5vw] md:text-[1.5vw] font-semibold">
            Redeem Discounts in 2023
          </h2>
          <p className="text-[3vw] md:text-[1.25vw]">
            In 2023, Modiji will select his dates of travel min 14 days prior of
            the batch. Since he already has his 10K voucher, he will only pay
            the remaining amount of 4,999 before his trip.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <img src={rupee} className="h-[14vw] md:h-[6vw]" alt="" />
          <h2 className="text-[3.5vw] md:text-[1.5vw] font-semibold">
            Travel Smart with WanderOn
          </h2>
          <p className="text-[3vw] md:text-[1.25vw]">
            In 2023, the regular prices of this trip would be more than 14,999.
            Which means Modiji would be saving lot more by purchasing the Early
            Bird Voucher. Travel smart like Modiji.
          </p>
        </div>
      </div>

      <EarlyBirdTrips />
      <Faqs />
      <SecretSauce />
      <Testimonial />
    </div>
  );
};

export default EarlyBirdSale;
