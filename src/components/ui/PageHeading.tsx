import React from "react";

const PageHeading = ({ children }: React.PropsWithChildren) => {
  return (
    <header className="w-full pt-28 flex justify-center gap-3 md:justify-start md:px-8 md:pt-36 lg:pt-48">
      {children}
    </header>
  );
};

export default PageHeading;
