import React from "react";
import { useLoaderData } from "react-router-dom";
import DoubleText from "../../../Components/DoubleText";
import TripBanner from "../TripBanner";
import TripDetails from "../TripDetails";

const TripDetailsPage = () => {
  const tripDetails = useLoaderData();
  const {
    banner_image,
    subtitle,
    title,
    duration,
    starting_price,
    pickup_and_drop,
    about,
    photos,
    videos,
  } = tripDetails;

  return (
    <div>
      <TripBanner
        banner_image={banner_image}
        subtitle={subtitle}
        title={title}
      />
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <TripDetails
              duration={duration}
              starting_price={starting_price}
              pickup_and_drop={pickup_and_drop}
              about={about}
              photos={photos}
              videos={videos}
            />
          </div>
          <div className="space-y-6">
            <p className="text-[19px] font-semibold text-accent ">
              Trips so perfect that Travelers want you to know more about their
              experiences!
            </p>
            {/* <iframe
              width="384"
              height="216"
              src="https://www.youtube.com/embed/BagUzmZTJ58"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            /> */}
            <div class="relative text-left ">
              <div class="text-[25px] font-semibold text-accent lowercase absolute top-[25%]">
                get in touch
              </div>
              <div class="text-[50px] font-semibold text-[#e6e6e6] uppercase">
                get in touch
              </div>
            </div>
            <form>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="font-semibold text-[14px]">
                    Full Name? *
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-xs w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="font-semibold text-[14px]">
                    Contact No. *
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-xs w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="font-semibold text-[14px]">Email ID *</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-xs w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="font-semibold text-[14px]">
                    Preferred Destination
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered input-xs w-full max-w-xs"
                />
              </div>
              <div className="flex justify-start mt-4">
                <button className="btn bg-accent text-white w-1/3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsPage;
