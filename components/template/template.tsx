import { ReactNode } from "react";
import NavigasiHomePage from "../navigasiHomepage";

type ITemplate = {
  children: ReactNode;
};

export default function Template(props: ITemplate) {
  return (
    <>
      <NavigasiHomePage />
      {props.children}
    </>
  );
}
