import { useCallback, useState } from "react";

export interface IntroProps {
  setToggle: (toogle: boolean) => void;
  onPlay: (toogle: boolean) => void;
}

const Intro = ({ setToggle, onPlay }: IntroProps) => {
  const [introTransform, setIntroTransform] = useState("");

  const handlePlayEnded = useCallback(() => {
    setIntroTransform(`translateY(-100%)`);
    setToggle(false);
  }, []);
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100%",
          overflow: "hidden",
          transform: introTransform,
          transition: `transform 1.2s cubic-bezier(0.4,0,0.3,1) 0s`,
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            position: "absolute",
            objectFit: "contain",
            height: "100%",
            width: "auto",
            top: "50%",
            left: "50%",
            transform: `translate(-50%,-50%)`,
          }}
          src="/assets/videos/intro.mp4"
          onPlay={() => {
            onPlay(true);
          }}
          onEnded={handlePlayEnded}
        ></video>
      </div>
    </>
  );
};
export default Intro;
