import React from "react";
import styled from "styled-components";
import { NavigationType, useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import Styled from "../styles/Styles";
import Functions from "../util/Functions";
import Colors from "../styles/Colors";

const { sleep } = Functions;

const Home = () => {
  const navigate = useNavigate();
  const [websiteProps, websiteApi] = useSpring(() => ({
    from: { opacity: 0, x: "0%" },
    to: { opacity: 1, x: "45%" }
  }));
  const [ofProps, ofApi] = useSpring(() => ({
    from: { opacity: 0, x: "100%" },
    to: { opacity: 1, x: "45%" }
  }));
  const [maxProps, maxApi] = useSpring(() => ({
    from: { opacity: 0, y: "80%" },
    to: { opacity: 1, y: "0%" }
  }));

  const handleClick = async () => {
    websiteApi.start({
      from: {
        opacity: 1,
        x: "45%"
      },
      to: {
        opacity: 0,
        x: "100%"
      }
    });
    ofApi.start({
      from: {
        opacity: 1,
        x: "45%"
      },
      to: {
        opacity: 0,
        x: "0%"
      }
    });
    maxApi.start({
      from: {
        opacity: 1,
        y: "0%"
      },
      to: {
        opacity: 0,
        y: "80%"
      }
    });
    await sleep(350);
    navigate("/about");
  };

  return (
    <Styled.Background color={Colors.RED}>
      <animated.div style={{ ...websiteProps }}>
        <Styled.ClickBox onClick={handleClick}>website</Styled.ClickBox>{" "}
      </animated.div>
      <animated.div style={{ ...ofProps }}>
        <Styled.ClickBox onClick={handleClick}>of</Styled.ClickBox>{" "}
      </animated.div>
      <animated.div style={{ ...maxProps }}>
        <Styled.ClickBox onClick={handleClick}>max</Styled.ClickBox>
      </animated.div>
    </Styled.Background>
  );
};

export default Home;
