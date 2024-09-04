import React from "react";
import Title from "./Title";

const OurPolicy = () => {
    const policies = [
        {
          title: "Fresh Ingredients Policy",
          description: "We pride ourselves on using only the freshest and locally sourced ingredients. Every dish is prepared with care to ensure the highest quality and taste."
        },
        {
          title: "Hygiene Standards",
          description: "We adhere to the highest hygiene standards in our kitchen to ensure that every meal is prepared in a clean and safe environment."
        },
        {
          title: "Customer Satisfaction",
          description: "Our goal is to ensure that every customer leaves satisfied. We value your feedback and continuously strive to improve our services."
        },
        {
          title: "Sustainable Practices",
          description: "We are committed to sustainability, using eco-friendly packaging and reducing waste wherever possible."
        },
        {
          title: "Allergen Information",
          description: "We provide clear allergen information to ensure that all dietary needs and restrictions are met."
        },
        {
          title: "Delivery & Takeout",
          description: "We offer reliable and timely delivery and takeout services to provide you with a convenient dining experience."
        }
      ];
      
  return (
    <div className="w-full flex flex-col border-2  border-custom mt-2 py-8 onscroll">
      <div className="sm:text-2xl md:text-3xl text-center">
        <Title text1={"OUR"} text2={"POLICIES"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-12 sm:px-28 ">
        {policies.map((policy, index) => (
           <div
           key={index}
           className="p-6 flex flex-col justify-between items-center rounded-md shadow-lg bg-white hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
         >
           <p className="text-black font-lora-font font-bold mb-3 uppercase">
             {policy.title}
           </p>
           <p className="text-gray-600 sm:text-lg font-cart-font text-center">
             {policy.description}
           </p>
         </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
