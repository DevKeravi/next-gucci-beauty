import type { NextPage } from "next";
import Intro from "../src/components/Intro";
import Models from "../src/components/Models";
import { Container, Row, Col } from "react-bootstrap";
import VideoCarousel from "../src/components/VideoCarousel";
import { useState } from "react";

const Home: NextPage = () => {
  const [introToggle, setIntroToggle] = useState(true);
  const toggleCallback = (toggle: boolean) => {
    setTimeout(() => {
      setIntroToggle(toggle);
    }, 1000);
  };
  return (
    <>
      {introToggle === true ? (
        <Intro setToggle={toggleCallback} />
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              width: "100%",
              backgroundColor: "transparent",
              textAlign: "center",
              padding: "45px",
            }}
          >
            <img
              style={{ width: "50%", minWidth: "120px", maxWidth: "220px" }}
              src="/assets/photo/logoGucci.png"
              alt="Logo Gucci"
            />
          </div>
          <VideoCarousel />
          <Models />
        </>
      )}
    </>
  );
};

export default Home;
