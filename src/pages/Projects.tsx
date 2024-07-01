import React, { useState } from "react";
import Styled from "../styles/Styles";
import Colors from "../styles/Colors";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import Functions from "../util/Functions";
import routes from "../routes";
import MoonTool from "../components/MoonTool";

const { sleep, formatMoonPhase } = Functions;

const Projects = () => {
  const navigate = useNavigate();
  const [backProps, backApi] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }));
  const [toolProps, toolApi] = useSpring(() => ({
    from: {
      opacity: 0,
      width: "77px",
      height: "23px",
      borderRadius: "5px",
      backgroundColor: Colors.GRAY
    },
    to: {
      opacity: 1,
      width: "77px",
      height: "23px",
      borderRadius: "5px",
      backgroundColor: Colors.GRAY
    }
  }));

  const [moonTool, setMoonTool] = useState(false);

  const handleBackClick = async () => {
    backApi.start({
      from: { opacity: 1 },
      to: { opacity: 0 }
    });
    await sleep(500);
    navigate(routes.about);
  };
  const handleMoonToolClick = async () => {
    toolApi.start({
      from: {
        opacity: 1,
        width: "77px",
        height: "23px",
        backgroundColor: Colors.GRAY
      },
      to: {
        opacity: 1,
        width: "400px",
        height: "600px",
        backgroundColor: Colors.MIDNIGHT_BLUE
      }
    });
    backApi.start({
      from: { opacity: 1 },
      to: { opacity: 0 }
    });
    setMoonTool(true);
  };
  const handleMoonToolCloseClick = async () => {
    toolApi.start({
      from: {
        opacity: 1,
        width: "400px",
        height: "600px",
        backgroundColor: Colors.MIDNIGHT_BLUE
      },
      to: {
        opacity: 1,
        width: "77px",
        height: "23px",
        backgroundColor: Colors.GRAY
      }
    });
    backApi.start({
      from: { opacity: 0 },
      to: { opacity: 1 }
    });
    setMoonTool(false);
  };
  console.log(formatMoonPhase(0.33));
  return (
    <Styled.Background color={Colors.RED}>
      <animated.div style={{ ...backProps }}>
        <Styled.ClickBox onClick={handleBackClick}>back </Styled.ClickBox>
      </animated.div>
      <animated.div style={{ ...toolProps }}>
        <Styled.ClickBox
          onClick={() => {
            moonTool ? handleMoonToolCloseClick() : handleMoonToolClick();
          }}
        >
          moon tool{" "}
        </Styled.ClickBox>
        {moonTool && <MoonTool cityOrZip={"11237"} />}
      </animated.div>
    </Styled.Background>
  );
};

export default Projects;
