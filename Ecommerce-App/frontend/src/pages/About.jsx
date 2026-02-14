import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-14">
        <img className="w-full md:max-w-112.5" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            impedit repellendus earum. Perspiciatis, quasi animi error ex
            expedita iure corrupti illum dolorem libero, quia ad recusandae quas
            aspernatur sint. Voluptatum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            laboriosam maiores molestiae, maxime expedita deserunt explicabo
            ullam illo nisi atque id quasi necessitatibus beatae dicta.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            exercitationem voluptatum accusantium ipsam quae, assumenda
            dignissimos fugiat mollitia nobis est vitae corporis illo facere,
            aut, sequi culpa minus quisquam maiores enim repudiandae eligendi
            qui? Voluptate facere iste magni, harum ipsam vitae laboriosam odit
            soluta commodi.
          </p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Lorem, ipsum..</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            vero natus, corrupti labore, illo exercitationem nam aperiam animi,
            necessitatibus voluptatem porro nemo harum fugit voluptates quisquam
            incidunt reprehenderit debitis consectetur!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Lorem, ipsum..</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            vero natus, corrupti labore, illo exercitationem nam aperiam animi,
            necessitatibus voluptatem porro nemo harum fugit voluptates quisquam
            incidunt reprehenderit debitis consectetur!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 flex flex-col gap-5">
          <b>Lorem, ipsum..</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            vero natus, corrupti labore, illo exercitationem nam aperiam animi,
            necessitatibus voluptatem porro nemo harum fugit voluptates quisquam
            incidunt reprehenderit debitis consectetur!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default About;
