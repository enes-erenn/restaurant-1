import React from "react";
import Image from "next/image";
import Spatula from "../../assets/images/spatula.png";

interface Props {
  title: string;
}

const SubHeading: React.FC<Props> = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p style={{ marginBottom: "0", fontSize: "1.5rem" }}>{title}</p>
      <Image src={Spatula} alt="Spatula" width="48" height="24" />
    </div>
  );
};

export default SubHeading;
