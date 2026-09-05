import { Row, Col, Container } from "react-bootstrap";
import { Link } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

import Projects from "@/components/Projects";
import CareerPath from "@/components/CareerPath/CareerPath";
import Skills from "@/components/Skills";
import Whoami from "@/components/Whoami";

export default function Home() {
  return (
      <div>
        <Container className="p-3">
          <Row className="p-1">
            <Row className="align-items-center">
              <Col>
                <h1>Vinayak Jaiwant Mooliyil</h1>
                <p style={{ fontStyle: "italic" }}>
                  In Pursuit of Pure Wisdom and Excellence
                </p>
              </Col>
              <Col
                xs="auto"
                className="ms-auto d-flex align-items-center"
                style={{ gap: "20px" }} // consistent spacing
              >
                <Link href="https://github.com/tlynx538" target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub size="30px" />
                </Link>

                <Link href="https://www.linkedin.com/in/vjaiwantx/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size="30px" />
                </Link>
              </Col>
            </Row>
          </Row>
          <hr />
          <Whoami />
          <Row className="mt-3 p-2">
              <Skills />
          </Row>
          <Row className="p-3">
            {/* projects section here */}
            <Projects />
            {/* career section here */}
            <CareerPath />
          </Row>
          <hr />
          <Container>
            <h6>
              If you happen to like my work and would like to reach out, please
              mail me at <span>
                <Link href="mailto:vjaiwantx@gmail.com" target="_blank" rel="noopener noreferrer">
                   vjaiwantx@gmail.com
                </Link>
              </span>
              .
            </h6>
          </Container>
        </Container>
      </div>
  );
}