import React from "react";

interface MockupTitleProps {
  customText?: string;
  customColor?: string;
}

const MockupTitle: React.FC<MockupTitleProps> = ({
  customText = "Discover our features!",
  customColor = "text-white",
}) => {
  return (
    <p
      /* color="primary" */

      className={`text-center text-6xl ${customColor} content-center font-bold`}
    >
      {customText}
    </p>
  );
};

export default MockupTitle;
