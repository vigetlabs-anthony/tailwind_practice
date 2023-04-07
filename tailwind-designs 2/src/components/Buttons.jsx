import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="space-y-4 p-4 text-start">
        <div className="flex justify-center">
          <button className="primary-btn w-full">primary</button>
        </div>
        <div className="flex justify-center">
          <button className="secondary-btn w-full">seconday</button>
        </div>
        <div className="flex justify-center">
          <button className="accent-btn w-full">accent</button>
        </div>
        <div className="flex justify-center">
          <button disabled className="disabled-btn w-full">
            disabled
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
