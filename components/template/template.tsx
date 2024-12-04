import { ReactNode } from "react";
import NavigasiHomePage from "../navigasiHomepage";
import Footer from "../footer";
type ITemplate = {
  children: ReactNode;
};

export default function Template(props: ITemplate) {
  return (
    <>
      <NavigasiHomePage />
      {props.children}
      <Footer />
    </>
  );
}
