import React from "react";

type TH5 = React.PropsWithChildren<{}>;

const H5 = ({ children }: TH5) => {
  return (
    <h5 className="text-xl text-primary tracking-[2.7px] uppercase">
      {children}
    </h5>
  );
};

export default H5;
