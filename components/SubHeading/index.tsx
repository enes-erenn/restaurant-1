import React from "react";
import Image from "next/image";
import Spatula from "../../assets/images/spatula.png";

interface Props {
  title: string;
  alignImage: "start" | "center" | "end";
}

const SubHeading: React.FC<Props> = ({ title, alignImage }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p style={{ marginBottom: "0", fontSize: "1.5rem", textAlign: "center" }}>
        {title}
      </p>
      <div
        style={{
          width: "100% ",
          display: "flex",
          alignItems: "center",
          justifyContent: `${
            alignImage === "center" ? "center" : "flex" + "-" + alignImage
          }`,
        }}
      >
        <Image src={Spatula} alt="Spatula" width="48" height="24" />
      </div>
    </div>
  );
};

export default SubHeading;
