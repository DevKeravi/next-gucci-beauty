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

const ContainerWrapper = styled.div`
  background: ${(props) => props.color || "none"};
  background-color: transparent;
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

  return <ContainerWrapper color={backgroundColor}></ContainerWrapper>;
};
export default VideoCarousel;
