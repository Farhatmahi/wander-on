import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <h1 className="text-[5vw] lg:text-[2vw] px-[12vw] font-semibold mb-6">
        Here's to the VALUES we strive for
      </h1>
      <p className="text-[3vw] lg:text-[1.1vw] lg:px-[20vw] text-left ">
        There are a whole lot of values and visions that one develops during
        their college days, which are otherwise rare to cultivate. It is these
        values that brought together a few engineers from NIT Kurukshetra, who
        took upon themselves the task to revolutionize the Indian Travel
        Industry. The result? A successful establishment of a travel community
        that the youth can identify with. Have a look at the values we swear by
      </p>
      <div class="mx-auto lg:w-[700px] text-left rounded-md">
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">01</span>Community Experience
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light">
            <ul>
              <li className="list-disc mb-4">
                It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </li>
              <li className="list-disc">
                That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">02</span>Customer Satisfaction
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light">
            <ul>
              <li className="list-disc mb-4">
                The very reason WanderOn was established was because the
                founders, in their initial phase of career, had experienced what
                it is to live a mundane 9-5 life.
              </li>
              <li className="list-disc">
                To have been in the shoes of your customers gives a firm
                understanding of what they need, hence WanderOn thrives to
                provide exactly the same, maybe even more!
              </li>
              <li className="list-disc">
                This is the sole reason why we’ve managed to garner more than
                3000 reviews across with a rating of 4.9/5 on all social
                platforms.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">03</span>Transparency
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light">
            <ul>
              <li className="list-disc mb-4">
                How so ironic it may sound, the secret to run a successful
                business lies in being as transparent as one can be.
              </li>
              <li className="list-disc">
                The teams within WanderOn, the vendors and the clients maintain
                an unclouded relationship, and that is why this trio is aligned
                towards a common goal of nourishing the travel community.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">04</span>Creative Mind
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light">
            <ul>
              <li className="list-disc mb-4">
                When you’re into a business that dwells on a new adventure
                everyday, anything regular becomes a setback. So it is justified
                to say that inventiveness is no less than a drug here at
                WanderOn.
              </li>
              <li className="list-disc">
                While the marketing team aces the game, our team captains and
                even sales executives like to add a spin of creativity to their
                work!
              </li>
              <li className="list-disc">
                We firmly believe there is no cap to the potential of artistic
                people, and it surely reflects in the functioning of WanderOn.
              </li>
            </ul>
          </div>
        </details>
        <details class="open:bg-accent open:text-white transition duration-300 ease-in-out">
          <summary class="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-semibold">
            <span className="text-[#848484] mr-4">05</span>Freedom from Hassles
          </summary>
          <div class="px-10 pb-4 bg-accent text-sm font-light">
            <ul>
              <li className="list-disc mb-4">
                If you take a moment to reflect upon how life actually is, it
                might just strike you hard that Freedom is a rare privilege.
              </li>
              <li className="list-disc">
                Having been constrained to a rulebook of social and work life,
                we seem to have missed the concept of freedom.
              </li>
              <li className="list-disc">
                At WanderOn, we strive to make people experience how rawness
                tastes like. Be it our services, or our work culture, we want
                people to know that Freedom is the only norm.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Values;
