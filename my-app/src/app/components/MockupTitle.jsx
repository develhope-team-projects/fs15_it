import React from "react";

const MockupTitle = ({ customText = "Discover our features!" }) => {
  return (
    <p
      /* color="primary" */

      className="text-center text-6xl text-gray-300 content-center font-bold"
    >
      {customText}
    </p>
  );
};

export default MockupTitle;
