"use client";

import { useState } from "react";

const FilterComponent = () => {
  const [courseCategory, setcourseCategory] = useState([]);
  const [selectedLevelValues, setSelectedLevelValues] = useState([]);
  const [coursePrice, setCoursePrice] = useState([]);
  const [language, setLanguage] = useState([]);

  const courseCategoriesOptions = [
    "Personal Development",
    "Career Development",
    "Public Speaking",
  ];

  const levelOptions = ["All Levels", "Beginners", "Experts"];

  const coursePriceOptions = ["Paid Course", "Free Course"];

  const languageOptions = ["English", "Portugues", "#$%^&*", "TurkcE"];

  const handleDevelopmentChange = (event) => {
    const value = event.target.value;
    setcourseCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleLevelChange = (event) => {
    const value = event.target.value;
    setSelectedLevelValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleCoursePriceOptions = (event) => {
    const value = event.target.value;
    setCoursePrice((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleLanguageOptions = (event) => {
    const value = event.target.value;
    setLanguage((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="relative border border-1 h-[max-content] mr-[50px] px-5 py-3 mb-2 w-[40vh]">
      <h2 className="text-[18px] font-bold">Development Areas</h2>
      <div className="pb-2">
        {courseCategoriesOptions.map((option, index) => (
          <div key={index} className="pt-1">
            <input
              type="checkbox"
              className="mr-2"
              id={option}
              value={option}
              checked={courseCategory.includes(option)}
              onChange={handleDevelopmentChange}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>

      {/* Level Checkboxes */}
      <div>
        <h2 className="text-[18px] font-bold">Levels</h2>
        <div className="pb-2">
          {levelOptions.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                className="mr-2"
                value={option}
                checked={selectedLevelValues.includes(option)}
                onChange={handleLevelChange}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[18px] font-bold">Course Price</h2>
        <div className="pb-2">
          {coursePriceOptions.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                className="mr-2"
                value={option}
                checked={coursePrice.includes(option)}
                onChange={handleCoursePriceOptions}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[18px] font-bold">Language</h2>
        <div className="pb-2">
          {languageOptions.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mr-2"
                id={option}
                value={option}
                checked={language.includes(option)}
                onChange={handleLanguageOptions}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
