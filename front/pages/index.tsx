import type { NextPage } from "next";
import Intro from "../src/components/Intro";
import Models from "../src/components/Models";
import { Container, Row, Col } from "react-bootstrap";
import VideoCarousel from "../src/components/VideoCarousel";
import { useCallback, useState } from "react";

const Home: NextPage = () => {
  const [introToggle, setIntroToggle] = useState(true);
  const [logoTransform, setLogoTransform] = useState(`scale(1.4)`);

  const logoPadding = "45px";
  const handlePlayStarted = useCallback(() => {
    setLogoTransform(`translateY(calc(-50vh + ${logoPadding})) scale(1.0)`);
  }, []);

  const toggleCallback = (toggle: boolean) => {
    setTimeout(() => {
      setIntroToggle(toggle);
    }, 1000);
  };

  const onPlayCallback = (toogle: boolean) => {
    if (toogle) {
      handlePlayStarted();
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "transparent",
          textAlign: "center",
          zIndex: "5",
          padding: `${logoPadding}`,
          top: `calc(50% - ${logoPadding})`,
          transition: `transform 1.2s cubic-bezier(0.4,0,0.3,1) 0s`,
          transform: logoTransform,
          marginRight: "1rem",
        }}
      >
        <img
          style={{ width: "50%", minWidth: "120px", maxWidth: "220px" }}
          src="/assets/photo/logoGucci.png"
          alt="Logo Gucci"
        />
      </div>
      {introToggle === true ? (
        <Intro setToggle={toggleCallback} onPlay={onPlayCallback} />
      ) : (
        <>
          <VideoCarousel />
          <Models />
        </>
      )}
    </>
  );
};

export default Home;
