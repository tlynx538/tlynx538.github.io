import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { 
  Text,
  Card,
  List,
  Link,
  Icon,
  Badge,
  Theme,
  Span
} from "@chakra-ui/react";

import { GrLinkNext } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
export default function Home() {
  return (
    <Theme appearance='dark'>
      <div>
        <Container className="p-3">
          <Row className='p-1'>
          <Row className="align-items-center">
  <Col>
    <h1>Vinayak Jaiwant</h1>
    <p style={{ fontStyle: "italic" }}>In Pursuit of Pure Wisdom and Excellence</p>
  </Col>
  <Col xs="auto" className="ms-auto">
    <Link href="https://github.com/tlynx538" className="me-3">
      <IoLogoGithub size={"30px"}/>
    </Link>
    <Link href="https://www.linkedin.com/in/vjaiwantx/">
      <FaLinkedin size={"30px"}/>
    </Link>
  </Col>
</Row>
</Row>
<hr />
          <Row className="mt-3 p-3">
            <h3> &gt; $whoami</h3>
            <Container>
              <List.Root>
                <List.Item>Masters&apos; Student (Business Analytics & AI) at <b>Naveen Jindal School of Management, University of Texas at Dallas</b>.</List.Item>
                <List.Item>~3 years of experience in the IT industry working for <b>NTT Data</b> and <b>Owens & Minor</b>.</List.Item>
                <List.Item>Bachelors&apos; of Engineering in Computer Science and Engineering at <b>KLE Technological University, Dr. M.S Sheshgiri Campus</b>.</List.Item>
                <List.Item>Skilled in developing web apps and machine learning applications.</List.Item>
                <List.Item>Ocassional tinkerer and hobbyist.</List.Item>
              </List.Root>
            </Container>
          </Row>
          <Row className="p-3">
            <Col md={8}>
              <h3 className='mb-2'>Projects</h3>
              <Container style={{overflowY: "auto", maxHeight:"550px", maxWidth: "900px", width: "100%", maxWidth: "900px"}}>
                <Col>
                  <Card.Root className='mb-3 p-3' style={{width: "100%", maxWidth: "850px"}}>
                    <Card.Body gap="2">
                      <Card.Title mt="2">Library Management System</Card.Title>
                      <Card.Description>
                      This project was done as part of the requirement of BUAN 6360: Database Foundations for Business Analytics
                      </Card.Description>
                      <Row md={1}>
                      <Col>
                      <Badge colorPalette="purple">Work In Progress</Badge>
                      </Col>
                      </Row>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                    <Icon fontSize="2xl" color="white.700">
                    <a href="https://github.com/tlynx538/Library-Management-System"><GrLinkNext/></a>
                    </Icon>
                    </Card.Footer>
                  </Card.Root>
                  <Card.Root className='mb-3 p-3' style={{width: "100%", maxWidth: "850px"}}>
                    <Card.Body gap="2">
                      <Card.Title mt="2">Analyzing Electric Vehicle Adoption Patterns In Washington State</Card.Title>
                      <Card.Description>
                      Our project analyzes electric vehicle (EV) adoption trends in Washington State. We aim to derive insights that can help guide policy decisions, infrastructure investments, and promote EV accessibility across various regions. 
                      </Card.Description>
                      <Row md={1}>
                      </Row>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                    <Icon fontSize="2xl" color="white.700">
                    <a href="https://github.com/tlynx538/EV-Adoption-Washington"><GrLinkNext/></a>
                    </Icon>
                    </Card.Footer>
                  </Card.Root>
                  <Card.Root className='mb-3 p-3' style={{width: "100%", maxWidth: "850px"}}>
                    <Card.Body gap="2">
                      <Card.Title mt="2">PriceWatch</Card.Title>
                      <Card.Description>
                      A Simple Tool to check latest rates on Capacitors, Motors and other Items
                      </Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                    <Icon fontSize="2xl" color="white.700">
                    <a href="https://github.com/tlynx538/PriceWatch"><GrLinkNext/></a>
                    </Icon>
                    </Card.Footer>
                  </Card.Root>
                  <Card.Root className='mb-3 p-3' style={{width: "100%", maxWidth: "850px"}}>
                    <Card.Body gap="2">
                      <Card.Title mt="2">CovXray</Card.Title>
                      <Card.Description>
                      Detect COVID-19 using X-ray scans.
                      </Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                    <Icon fontSize="2xl" color="white.700">
                    <a href="https://github.com/tlynx538/CovXray"><GrLinkNext/></a>
                    </Icon>
                    </Card.Footer>
                  </Card.Root>
                </Col>
              </Container>
            </Col>
            <Col md={4} className='mt-3'>
              <h3> Professional Experience </h3>
              <Container className='mt-4'>
                <TimelineRoot>
                  <TimelineItem>
                    <TimelineConnector bg="border.emphasized" color="teal.contrast">
                    </TimelineConnector>
                    <TimelineContent gap="1">
                      <TimelineTitle>
                        Analyst
                      </TimelineTitle>
                      <b>Owens & Minor</b>
                      <TimelineDescription>July 2023 - July 2024</TimelineDescription>
                      <Text className='mt-1'>
                        Developed, maintained and monitored BizTalk applications for O&M customers for various use cases
                      </Text>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector bg="border.emphasized" color="teal.contrast">
                    </TimelineConnector>
                    <TimelineContent gap="1">
                      <TimelineTitle>
                        Info Tech Senior Associate
                      </TimelineTitle>
                      <b>NTT Data</b>
                      <TimelineDescription>Oct 2021 - July 2023</TimelineDescription>
                      <Text className='mt-1'>
                        Collaborated with cross-functional teams to streamline processes and ensure alignment with client requirements
                      </Text>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineConnector bg="border.emphasized" color="teal.contrast">
                    </TimelineConnector>
                    <TimelineContent gap="1">
                      <TimelineTitle>
                        Part Time System Engineer
                      </TimelineTitle>
                      <b>Shreshta IT</b>
                      <TimelineDescription>Jan 2021 - July 2021</TimelineDescription>
                      <Text className='mt-1'>
                        Provided on-site support for customers to resolve network and hardware issues
                      </Text>
                    </TimelineContent>
                  </TimelineItem>
                </TimelineRoot>
              </Container>
            </Col>
          </Row>
          <hr/>
          <Container>
          <h6>If you happen to like my work and would like to reach out, please mail me at <Span><Link href="mailto:vjaiwantx@gmail.com">vjaiwantx@gmail.com</Link></Span>.</h6>
          </Container>
        </Container>
      </div>
    </Theme>
  );
}
