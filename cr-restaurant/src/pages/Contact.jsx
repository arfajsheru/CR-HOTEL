import React from "react";
import Title from "../component/Title";
import contactus from "../assets/contactus1.jpeg";
const Contact = () => {
  return (
    <div className="pt-10 animate-fadeInUp">
      {/* Contact Us Title */}
      <div className="text-3xl text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Contact Us Content */}

      <div className="my-8 flex flex-col  md:flex-row gap-16  mb-28 animate-fadeInUp ">
        <div className="md:w-2/4 flex items-center justify-end">
        <img
          src={contactus}
          className="w-[450px] md:max-w-[480px] object-cover h-[450px] animate-fadeInUp"
          alt=""
        />
        </div>
        <div className="flex flex-col justify-center items-start md:w-2/4 text-gray-500 gap-6 animate-fadeInUp">
          <h1 className="text-2xl text-custom font-footer-font">Our store</h1>
          <p>
            400064 Malad Station
            <br />
            Rani Sati Marg , Mumbai , INDIA
          </p>

          <p>
            Tel : 91+ 9913690041
            <br />
            Email: caferajasthan@gamil.com
          </p>

          <b>Careers at Cafe Rajasthan</b>

          <p>Learn more about our teams and job opening</p>

          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
