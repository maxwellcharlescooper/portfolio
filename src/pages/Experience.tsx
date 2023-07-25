import React from "react";
import Styled from "../styles/Styles";
import Colors from "../styles/Colors";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom";
import Functions from "../util/Functions";
import routes from "../routes";

const { sleep } = Functions;

const Experience = () => {
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
        <Styled.TextBox onClick={handleClick}>
          <div>
            <b>Infondrian</b>
          </div>
          <div>
            <div>Full Stack Engineer</div>
            <em>2020-2023</em>
          </div>
          <div>
            <ul>
              <li>
                For a cloud-based radiation oncology chart-checking software
                startup, built entire frontend SPA from start to finish using
                React Typescript (including custom hooks) and asynchronous API
                calls/different custom features, along with many different
                imported libraries such as styled-components, Axios, react-
                router-dom, D3.js, momentJS, socket.io, js-cookie, Recharts, qs,
                etc.
              </li>
              <li>
                Completed backend work (running on NodeJS and TypeScript)
                including writing Postman API tests, debugging 500 internal
                server errors, SQL queries (Sequelize) to the database, writing
                GET functions from the api route to the response and Lambda
                functions on a separate repository that execute on the db itself
              </li>
              <li>
                Set up entire frontend CI/CD pipeline with GitHub trigger from
                dev to prod including testing stage using AWS CodePipeline,
                CodeBuild, CodeDeploy, as well as DNS networking using AWS Route
                53 and AWS Cloudfront to point to an S3 bucket
              </li>
              <li>
                Used various Docker containers including running a local
                PostgreSQL database, an Nginx proxy for a secondary api,
                frontend testing using Docker containers running CodeceptJS and
                Chrome
              </li>
              <li>
                Set up authentication for React app using Auth0 and later
                transitioning to a custom login page with Amazon Cognito
              </li>
            </ul>
          </div>
        </Styled.TextBox>
      </animated.div>
    </Styled.Background>
  );
};

export default Experience;
