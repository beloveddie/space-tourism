import React from "react";
import moon from "../../assets/destination/image-moon.png";

const DestinationImage = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <img src={moon} alt="moon" className="w-44 h-44 text-center" />
    </div>
  );
};

export default DestinationImage;
