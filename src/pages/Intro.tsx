import React from "react";
import Styled from "../styles/Styles";
import Colors from "../styles/Colors";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import Functions from "../util/Functions";
import routes from "../routes";

const { sleep } = Functions;

const Intro = () => {
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
    await sleep(350);
    navigate(routes.about);
  };
  return (
    <Styled.Background color={Colors.RED}>
      <animated.div style={{ ...props }}>
        <Styled.TextBox onClick={handleClick}>
          hey what's good! {"\n"}i'm max {"\n"}
          and i code
        </Styled.TextBox>
      </animated.div>
    </Styled.Background>
  );
};

export default Intro;
