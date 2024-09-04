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
    <div className="w-full flex flex-col border-2  border-custom mt-2 py-8">
      <div className="text-3xl text-center">
        <Title text1={"OUR"} text2={"POLICIES"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-12 sm:px-28">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-custom p-6 flex flex-col justify-between items-center rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:opacity-90"
          >
            <h3 className="text-gray-800 font-lora-font font-bold  sm:text-2xl mb-3">
              {policy.title}
            </h3>
            <p className="text-gray-500 sm:text-lg text-center">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
