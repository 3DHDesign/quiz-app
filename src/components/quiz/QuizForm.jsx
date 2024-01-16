// src/components/quiz/QuizForm.js
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

const QuizForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    // Handle form submission
    setFormSubmitted(true);
    // Pass data to parent component
    onSubmit({
      name,
      phoneNumber,
      email,
      websiteType,
      description,
      technology,
      urgent,
      companyName,
    });
  };

  if (!formSubmitted) {
    // Render the initial form if it hasn't been submitted yet
    return (
        <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </Button>
        </form>
         
      </div>
    );
  }

  // Render the questionnaire after form submission
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <form>
      <h1 className="text-2xl font-bold mb-4">Quiz App - Questionnaire</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          1. What kind of website do you want?
        </h2>
        <label className="block mb-2">
          <input
            type="radio"
            value="ecommerce"
            checked={websiteType === "ecommerce"}
            onChange={() => setWebsiteType("ecommerce")}
          />
          E-commerce
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="wordpress"
            checked={websiteType === "wordpress"}
            onChange={() => setWebsiteType("wordpress")}
          />
          WordPress
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="blog"
            checked={websiteType === "blog"}
            onChange={() => setWebsiteType("blog")}
          />
          Blog
        </label>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          2. Description of the website:
        </h2>
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          3. What technology do you want?
        </h2>
        <label className="block mb-2">
          <input
            type="radio"
            value="wordpress"
            checked={technology === "wordpress"}
            onChange={() => setTechnology("wordpress")}
          />
          WordPress
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="react"
            checked={technology === "react"}
            onChange={() => setTechnology("react")}
          />
          React
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="php"
            checked={technology === "php"}
            onChange={() => setTechnology("php")}
          />
          PHP
        </label>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          4. Do you want this urgent?
        </h2>
        <label className="block mb-2">
          <input
            type="radio"
            value="yes"
            checked={urgent}
            onChange={() => setUrgent(true)}
          />
          Yes
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="no"
            checked={!urgent}
            onChange={() => setUrgent(false)}
          />
          No
        </label>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">
          5. What is the name of the company?
        </h2>
        <Input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div>
        <Button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </Button>
      </div>
    </form>
  </div>
  );
};

export default QuizForm;
