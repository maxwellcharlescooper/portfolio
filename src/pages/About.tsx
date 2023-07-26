import React from "react";
import styled from "styled-components";
import Styled from "../styles/Styles";
import pdf from "../assets/MaxwellCooperResume.pdf";
import { useSpring, animated } from "@react-spring/web";
import Functions from "../util/Functions";
import { useNavigate } from "react-router-dom";
import Colors from "../styles/Colors";
import routes from "../routes";

const { sleep } = Functions;

const About = () => {
  const navigate = useNavigate();

  const [introProps, introApi] = useSpring(() => ({
    from: { opacity: 0, y: "-100px" },
    to: { opacity: 1, y: "0px" }
  }));
  const [projectsProps, projectsApi] = useSpring(() => ({
    from: { opacity: 0, x: "100px" },
    to: { opacity: 1, x: "0px" }
  }));
  const [resumeProps, resumeApi] = useSpring(() => ({
    from: { opacity: 0, y: "100px" },
    to: { opacity: 1, y: "0px" }
  }));

  const handleClick = async (route: string) => {
    introApi.start({
      from: { opacity: 1, y: "0px" },
      to: { opacity: 0, y: "-100px" }
    });
    projectsApi.start({
      from: { opacity: 1, x: "0px" },
      to: { opacity: 0, x: "100px" }
    });
    resumeApi.start({
      from: { opacity: 1, y: "0px" },
      to: { opacity: 0, y: "100px" }
    });
    await sleep(350);
    navigate(route);
  };
  return (
    <Styled.Background color={Colors.PINK}>
      <animated.div style={{ ...introProps }}>
        <Styled.ClickBox onClick={() => handleClick(routes.intro)}>
          intro
        </Styled.ClickBox>
      </animated.div>
      <animated.div style={{ ...projectsProps }}>
        <Styled.ClickBox onClick={() => handleClick(routes.projects)}>
          projects
        </Styled.ClickBox>
      </animated.div>
      <animated.div style={{ ...resumeProps }}>
        <Styled.ClickBox
          onClick={() => {
            window.open(pdf);
          }}
        >
          resume
        </Styled.ClickBox>
      </animated.div>
    </Styled.Background>
  );
};

export default About;
