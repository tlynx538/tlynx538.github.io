import { Container, Row } from "react-bootstrap";
import { List } from "@chakra-ui/react";

export default function Whoami() {
  return (
    <Row className="mt-3 p-3 mb-3">
      <h3>&gt; $whoami</h3>
      <Container
        style={{
          color: "#33ff99",
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
        }}
      >
        <List.Root>
          <List.Item>
            <b>IT and Data Analytics Intern</b> at{" "}
            <b>
              <a
                href="https://www.dallasrugs.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Dallas Rugs
              </a>
              .
            </b>
          </List.Item>
          <List.Item>
            Master of Business Analytics &amp; AI at{" "}
            <b>
              <a
                href="https://jindal.utdallas.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Naveen Jindal School of Management, University of Texas at Dallas
              </a>
              .
            </b>
          </List.Item>
          <List.Item>
            ~3 years of experience in the IT industry working for{" "}
            <b>
              <a
                href="https://www.nttdata.com/global/en/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                NTT Data
              </a>
            </b>{" "}
            and{" "}
            <b>
              <a
                href="https://www.owens-minor.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Owens &amp; Minor
              </a>
              .
            </b>
          </List.Item>
          <List.Item>
            Bachelors of Engineering in Computer Science and Engineering at{" "}
            <b>
              <a
                href="https://www.kletech.ac.in/belagavi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                KLE Technological University, Dr. M.S Sheshgiri Campus
              </a>
              .
            </b>
          </List.Item>
        <List.Item>
        Skilled in developing agentic AI systems, data pipelines, backend services, web applications, and automated CI/CD workflows.
        </List.Item>
          <List.Item>Ocassional tinkerer and hobbyist.</List.Item>
        </List.Root>
      </Container>
    </Row>
  );
}
