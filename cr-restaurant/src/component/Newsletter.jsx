import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to the server)
    console.log("Submitted:", { email, name });
  };

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Stay Updated with Our Latest Offers!</h2>
        <p className="text-center mb-8">
          Subscribe to our newsletter and be the first to know about our exclusive offers, upcoming events, and new dishes!
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name (Optional)</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Your Email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          We respect your privacy. Read our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Follow Us:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-pink-500 hover:underline">Instagram</a>
            <a href="#" className="text-blue-400 hover:underline">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
