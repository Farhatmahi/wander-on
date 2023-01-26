import React from "react";
import DoubleText from "../../Components/DoubleText";

const Faqs = () => {
  return (
    <div className="container mx-auto px-0 md:px-0">
      <DoubleText text={"FAQS"} />
      <div class="w-full text-left rounded-md">
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2  ">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">01</span>Which Trips Can Be
            Booked Under The Early Bird Offers?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                We are offering early bird discount offers on the above
                mentioned ten backpacking trips.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">02</span>What Will Be The
            Duration Of This Early Bird Offer?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Our early bird sale will end on 07th February 2023. We only have
                100 slots available under this offer.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">03</span>When Can I Avail This
            Offer?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                You can choose to pay now & decide later. Choose any
                destination(from the above mentioned list & any batch (date) up
                to 14 days before departure.)
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">04</span>What If I Am Not Able
            To Avail This Offer In 2023?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                No need to worry! If discounts vouchers are not utilized till
                30th November 2023, the booking amount can be adjusted in future
                trips at regular prices. For example- If you are purchasing a 5K
                voucher, & are unable to plan trips mentioned above, you can use
                the entire money on any of the WanderOn Services. (Weekend Trips
                and Customized Trips) at their regular prices.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">05</span>What If I Want To
            Plan Some Other Trips/Services Which WanderOn Offers?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Let's say you are unable to plan any of the mentioned
                backpacking trips. Instead, you want to plan some other
                offerings by WanderOn like another weekend, backpacking, or any
                customized trips. In that case, you can avail those services at
                their regular costs.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">06</span>Can I Buy Multiple
            Vouchers For The Offer?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Yes, You can buy multiple vouchers of the offer for your friends
                and family. You can also use these vouchers for our different
                trips in 2023.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">07</span>Can I Transfer My
            Voucher To Someone Else?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Yes, you can transfer your voucher to anyone. They can claim our
                trips at discounted prices till 30th November 2023.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">08</span>How Can I Redeem My
            Early Bird Voucher?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Trip Slots under early bird offer will be live on our website
                from 01st June 2023. You can redeem your discount voucher for
                the trips starting after. Book your slots on our trips 14 days
                before the departure of any batch date mentioned on the website.
                Batch availability is subject to the availability of Slots.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">09</span>Is There Any Expiry
            Date For The Discount Voucher?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                No, there is no expiry on the Voucher. You can avail the
                discounted prices for the backpacking trips till NOV 2023 and
                after that you can join a trip at regular costing.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">10</span>Can I Cancel My
            Voucher And Get A Refund?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                Refund for the voucher will not be possible under any
                circumstance since the voucher is flexible enough & caters to
                all your needs.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">11</span>What Is The
            Difference Between A 5K Voucher Or A 10K Voucher?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                The only difference between both the vouchers is the price
                range. As it is evident, you will get more discount when you
                will pay 10K for the trip.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out shadow-2xl rounded-3xl mb-2">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">12</span>Why Should I Book
            Under This Offer?
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light rounded-b-3xl">
            <ul>
              <li className="list-disc mb-4">
                We are giving once in a year opportunity to book your trips at
                such unbelievable rates. This will be the last window to book
                the trips at discounted rates. You have the sole power to
                utilize your money according to your needs.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Faqs;
