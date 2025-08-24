import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";

import { Text } from "@chakra-ui/react";
import { Col, Container } from "react-bootstrap";
import "./CareerPath.css"; // import the CSS file

export default function CareerPath() {
  return (
    <Col md={4} className="mt-3">
      <h3> &gt; Professional Experience </h3>
      <Container className="mt-4">
        <TimelineRoot>
          {/* Current role with glowing dot */}
          <TimelineItem>
            <TimelineConnector
              bg="border.emphasized"
              color="teal.contrast"
              position="relative"
            >
              <div className="glow-dot"></div>
            </TimelineConnector>
            <TimelineContent gap="1">
              <TimelineTitle>IT and Data Analytics Intern</TimelineTitle>
              <b>Dallas Rugs</b>
              <TimelineDescription>June 2025 - Present</TimelineDescription>
              <Text className="mt-1">
                Developed and optimized databases, generated automated reports,
                and supported data-driven business decisions and operations.
              </Text>
            </TimelineContent>
          </TimelineItem>

          {/* Past roles */}
          <TimelineItem>
            <TimelineConnector
              bg="border.emphasized"
              color="teal.contrast"
            ></TimelineConnector>
            <TimelineContent gap="1">
              <TimelineTitle>Analyst</TimelineTitle>
              <b>Owens & Minor</b>
              <TimelineDescription>July 2023 - July 2024</TimelineDescription>
              <Text className="mt-1">
                Developed, maintained and monitored BizTalk applications for O&M
                customers for various use cases
              </Text>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector
              bg="border.emphasized"
              color="teal.contrast"
            ></TimelineConnector>
            <TimelineContent gap="1">
              <TimelineTitle>Info Tech Senior Associate</TimelineTitle>
              <b>NTT Data</b>
              <TimelineDescription>Oct 2021 - July 2023</TimelineDescription>
              <Text className="mt-1">
                Collaborated with cross-functional teams to streamline processes
                and ensure alignment with client requirements
              </Text>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector
              bg="border.emphasized"
              color="teal.contrast"
            ></TimelineConnector>
            <TimelineContent gap="1">
              <TimelineTitle>Part Time System Engineer</TimelineTitle>
              <b>Shreshta IT</b>
              <TimelineDescription>Jan 2021 - July 2021</TimelineDescription>
              <Text className="mt-1">
                Provided on-site support for customers to resolve network and
                hardware issues
              </Text>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Container>
    </Col>
  );
}
