import React from "react";

const Processing = ({title}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="alert alert-info shadow-lg max-w-md">
        <div className="flex items-center gap-4">
          <span className="loading loading-spinner loading-lg"></span>
          <div>
            <h3 className="font-bold text-2xl">{title} sahifasi yaratish jarayonida!</h3>
            <div className="text-base">Sahifa hozirda tayyorlanmoqda...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
