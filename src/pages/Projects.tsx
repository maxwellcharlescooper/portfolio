import React from "react";
import Styled from "../styles/Styles";
import Colors from "../styles/Colors";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import Functions from "../util/Functions";
import routes from "../routes";

const { sleep } = Functions;

const Projects = () => {
  const navigate = useNavigate();
  const [props, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }));
  const handleClick = async () => {
    api.start({
      from: { opacity: 1 },
      to: { opacity: 0 }
    });
    await sleep(500);
    navigate(routes.about);
  };
  return (
    <Styled.Background color={Colors.SAND}>
      <animated.div style={{ ...props }}>
        <Styled.ClickBox onClick={handleClick}>comin soon </Styled.ClickBox>
      </animated.div>
    </Styled.Background>
  );
};

export default Projects;
