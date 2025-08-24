import { Row, Col, Container } from "react-bootstrap";
import { List, Link, Theme, Span } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

import Projects from "@/components/Projects";
import CareerPath from "@/components/CareerPath/CareerPath";

export default function Home() {
  return (
    <Theme appearance="dark">
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
                <Link
                  href="/"
                  style={{
                    fontSize: "15px",
                    fontWeight: "300",
                    textDecoration: "none",
                    color: "white", // matches theme
                  }}
                >
                  Blogs
                </Link>
                <Link href="https://github.com/tlynx538">
                  <IoLogoGithub size="30px" />
                </Link>

                <Link href="https://www.linkedin.com/in/vjaiwantx/">
                  <FaLinkedin size="30px" />
                </Link>
              </Col>
            </Row>
          </Row>
          <hr />
          <Row className="mt-3 p-3 mb-3">
            <h3> &gt; $whoami</h3>
            <Container style={{ color: "#33ff99", fontFamily: "monospace" }}>
              <List.Root>
                <List.Item>
                  <b>IT and Data Analytics Intern</b> at <b>
                    <a
                      href="https://www.dallasrugs.com/"
                      style={{ textDecoration: "none" }}
                    >
                      Dallas Rugs
                    </a>
                  .</b>
                </List.Item>
                <List.Item>
                  Masters&apos; Student (Business Analytics & AI) at <b>
                    <span>
                      <a
                        href="https://jindal.utdallas.edu/"
                        style={{ textDecoration: "none" }}
                      >
                        
                        Naveen Jindal School of Management, University of Texas
                        at Dallas
                      </a>
                    </span>
                  .</b>
                </List.Item>
                <List.Item>
                  ~3 years of experience in the IT industry working for
                  <b>
                    
                    <a href="https://www.nttdata.com/global/en/" style={{ textDecoration: "none" }}> NTT Data </a>
                  </b>
                  and
                  <b>
                    
                    <a href="https://www.owens-minor.com/" style={{ textDecoration: "none" }}> Owens & Minor</a>
                  </b>
                  .
                </List.Item>
                <List.Item>
                  Bachelors of Engineering in Computer Science and Engineering
                  at
                  <b> <a href="https://www.kletech.ac.in/belagavi/" style={{ textDecoration: "none" }}>KLE Technological University, Dr. M.S Sheshgiri Campus</a></b>.
                </List.Item>
                <List.Item>
                  Skilled in developing web apps and machine learning
                  applications.
                </List.Item>
                <List.Item>Ocassional tinkerer and hobbyist.</List.Item>
              </List.Root>
            </Container>
          </Row>
          <Row className="mt-3 p-2">
            <h3>&gt; skills</h3>
            <Row className="mt-2">
              {/* Left side: ASCII Art */}
              <Col md={5} lg={4}>
                <pre
                  style={{
                    color: "#33ff99",
                    fontFamily: "monospace",
                    margin: 0,
                  }}
                >
                  {`              a8888b.
             d888888b.
             8P"YP"Y88
             8|o||o|88
             8'    .88
             8\`._.' Y8.
            d/      \`8b.
          .dP   .     Y8b.
         d8:'   "   \`::88b.
        d8"           \`Y88b
       :8P     '       :888
        8a.    :      _a88P
      ._/"Yaa_ :    .| 88P|
 jgs  \\    YP"      \`| 8P  \`.
 a:f  /     \\._____.d|    .'
      \`--..__)888888P\`._.'`}
                </pre>
              </Col>

              {/* Right side: Skills Specs */}
<Col md={7} lg={8}>
  <div style={{ color: "#33ff99", fontFamily: "monospace" }}>
    <div>
      <b>Programming&nbsp;Languages:</b>
      <span style={{ color: "#0080ff" }}>&nbsp;Python,&nbsp;SQL,&nbsp;JavaScript</span>
    </div>
    <div>
      <b>Data&nbsp;Engineering&nbsp;&amp;&nbsp;ML&nbsp;Tools:</b>
      <span style={{ color: "#0080ff" }}>&nbsp;dbt,&nbsp;Pandas,&nbsp;TensorFlow,&nbsp;PyTorch,&nbsp;scikit-learn</span>
    </div>
    <div>
      <b>Cloud&nbsp;Platforms:</b>
      <span style={{ color: "#0080ff" }}>&nbsp;Azure,&nbsp;Snowflake,&nbsp;Databricks&nbsp;(Lakehouse)</span>
    </div>
    <div>
      <b>Databases&nbsp;&amp;&nbsp;Warehouses:</b>
      <span style={{ color: "#0080ff" }}>&nbsp;PostgreSQL,&nbsp;MySQL,&nbsp;MongoDB,&nbsp;SQL&nbsp;Server</span>
    </div>
    <div>
      <b>DevOps&nbsp;&amp;&nbsp;Infra:</b>
      <span style={{ color: "#0080ff" }}>&nbsp;Docker,&nbsp;Ansible,&nbsp;Azure&nbsp;DevOps,&nbsp;Grafana/Prometheus,&nbsp;ELK</span>
    </div>
  </div>
</Col>


            </Row>
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
              mail me at <Span>
                <Link href="mailto:vjaiwantx@gmail.com">
                   vjaiwantx@gmail.com
                </Link>
              </Span>
              .
            </h6>
          </Container>
        </Container>
      </div>
    </Theme>
  );
}
