import React from "react";

const PageSection = ({ children }: React.PropsWithChildren) => {
  return <section className="-mt-64">{children}</section>;
};

export default PageSection;
