import { useState, useEffect } from "react";
import styled from "styled-components";

const colorSet = [
  {
    value: `linear-gradient(rgba(168, 212, 220, 0) 0%, rgb(222, 184, 71) 100%)`,
  },
  {
    value: `linear-gradient(rgba(168, 212, 220, 0) 0%, rgb(222, 114, 93) 100%)`,
  },
  {
    value: `linear-gradient(rgba(168, 212, 220, 0) 0%, rgb(176, 61, 44) 100%)`,
  },
  {
    value: `linear-gradient(rgba(168, 212, 220, 0) 0%, rgb(161, 173, 210) 100%)`,
  },
];

const videoData = [
  { src: "/assets/videos/slider1_video1boomerang.mp4" },
  { src: "/assets/videos/slider1_video2boomerang.mp4" },
  { src: "/assets/videos/slider1_video3boomerang.mp4" },
  { src: "/assets/videos/slider1_video4boomerang.mp4" },
  { src: "/assets/videos/slider1_video5boomerang.mp4" },
  { src: "/assets/videos/slider1_video6boomerang.mp4" },
];

const ContainerWrapper = styled.div`
  background: ${(props) => props.color || "none"};
  opacity: 1;
  z-index: 1;
  width: 100vw;
  min-height: 100vh;
`;

const VideoCarousel = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  let idx = 0;

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setBackgroundColor(colorSet[idx].value);
      if (idx + 1 == colorSet.length) {
        idx = 0;
      } else {
        idx++;
      }
    }, 1000);
    return () => {
      clearInterval(backgroundInterval);
    };
  }, []);

  useEffect(() => {}, []);

  return (
    <ContainerWrapper color={backgroundColor}>
      <div></div>
    </ContainerWrapper>
  );
};
export default VideoCarousel;
