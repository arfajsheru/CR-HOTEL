import React from "react";
import Title from "../component/Title";
import aboutimg from "../assets/aboutus1.jpg";
const About = () => {
  return (
    <div className="pt-8">
      {/* Title About Us */}
      <div className="text-3xl text-center">
        <Title text1={"ABOUTE"} text2={"US"} />
      </div>


      {/* Main Content About Us */}
      <div className="my-10 flex flex-col md:flex-row flex-wrap gap-10 md:gap-10 relative justify-center animate-fadeInUp">
      
        <img
          src={aboutimg}
          className="w-[500px] h-[450px] object-cover animate-fadeInUp"
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-1xl animate-fadeInUp">
          <p className="">
            Welcome to cafe rajasthan, where we serve you the best of culinary
            delights. Our passion for food is reflected in every dish we create,
            using only the freshest ingredients and traditional recipes that
            bring a burst of flavors to your plate.
          </p>

          <p>
            At cafe rajasthan, we believe in creating a dining experience that
            feels like home, whether you're here for a family dinner, a romantic
            date, or a casual meal with friends. Our warm ambiance and friendly
            service ensure you leave with a smile.
          </p>
          <b>Our Mission</b>
          <p>
            Our mission is to deliver authentic flavors that satisfy your
            cravings and exceed your expectations. We strive to maintain the
            highest standards of quality and hospitality, ensuring that every
            visit to our restaurant is a memorable one.
          </p>
        </div>

        {/* Why Choose Us Title */}
        <div className="text-4xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20 gap-2 animate-fadeInUp">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-custom">
            <b className="text-custom">Quality Assurance</b>
            <p className="text-gray-600">
              We pride ourselves on delivering exceptional quality in every
              aspect of our services. From luxurious rooms to exquisite dining,
              every detail is meticulously crafted to ensure your comfort and
              satisfaction.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-custom">
            <b className="text-custom">Convenience</b>
            <p className="text-gray-600">
              Our prime location offers easy access to local attractions and
              business centers, making your stay convenient and enjoyable.
              Whether you're here for leisure or work, we have you covered.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-custom">
            <b className="text-custom">Exceptional Customer Support</b>
            <p className="text-gray-600">
              Our dedicated team is available around the clock to assist you
              with any requests or concerns. We prioritize your needs and strive
              to provide a personalized experience that exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
