import React from "react";

const PageHeading = ({ children }: React.PropsWithChildren) => {
  return (
    <header className="pt-28 flex justify-center gap-3">{children}</header>
  );
};

export default PageHeading;
