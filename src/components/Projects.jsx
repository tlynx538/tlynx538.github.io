import { Card, Icon, Badge, HStack } from "@chakra-ui/react";

import { GrLinkNext } from "react-icons/gr";
import { Row, Col, Container } from "react-bootstrap";

export default function Projects() {
  const projectList = [
    {
      title: "Tafsiri-S2ST",
      link: "https://github.com/mbwika/Tafsiri-S2ST",
      description: (
        <>
          <span>
            <a
              href="https://artscilab.utdallas.edu/2025/04/04/tafsiri-s2st/"
              style={{ textDecoration: "none" }}
            >
              Tafsiri
            </a>
          </span>{" "}
          is an AI-powered speech-to-speech translation app that uses
          seamlessM4T and edge TTS models.
        </>
      ),
      tech: [
        { label: "FastAPI", color: "green" },
        { label: "Reactjs", color: "blue" },
        { label: "huggingface", color: "grey" },
      ],
    },
    {
      title: "Europa",
      link: "https://github.com/tlynx538/Europa",
      description: "REST API Interface built for provisioning IPython Kernels",
      tech: [
        { label: "Python", color: "blue" },
        { label: "FastAPI", color: "green" },
        { label: "IPython", color: "grey" },
      ],
    },
    {
      title: "FairSplit",
      link: "https://github.com/tlynx538/FairSplit",
      description:
        "A simple REST API used for tracking and splitting bills and expenses with other members",
      tech: [
        { label: "Node.js", color: "teal" },
        { label: "Express", color: "orange" },
      ],
    },
    {
      title: "USNJournalCLI",
      link: "https://github.com/tlynx538/USNJournalCLI",
      description:
        "A Command Line Tool/SDK for interacting with USN Journals on any NTFS Drive",
      tech: [
        { label: "C#", color: "purple" },
        { label: ".NET", color: "gray" },
      ],
    },
  ];

  const renderProjectCard = (project, index) => (
    <Card.Root
      key={index}
      className="mb-3 p-3"
      style={{ width: "100%", maxWidth: "850px" }}
    >
      <Card.Body gap="2">
        <Card.Title mt="2">
          <b>{project.title}</b>
        </Card.Title>
        <Card.Description>{project.description}</Card.Description>
        <Row md={1}>
          <Col>
            <p style={{ fontSize: "12px", fontWeight: "800" }}>TECH USED</p>
            <HStack spacing={3} wrap="wrap">
              {project.tech.length > 0 ? (
                project.tech.map((t, i) => (
                  <Badge
                    key={i}
                    colorPalette={t.color}
                    className="px-2 py-1"
                    fontSize="sm"
                    borderRadius="md"
                  >
                    {t.label}
                  </Badge>
                ))
              ) : (
                <span style={{ fontSize: "12px", color: "gray" }}>
                  (None listed)
                </span>
              )}
            </HStack>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Icon fontSize="2xl" color="white.700">
          <a href={project.link}>
            <GrLinkNext />
          </a>
        </Icon>
      </Card.Footer>
    </Card.Root>
  );

  return (
    <Col md={8}>
      <h3 className="mb-3">&gt; Projects</h3>
      <Container
        style={{
          overflowY: "auto",
          maxHeight: "550px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <Col>{projectList.map(renderProjectCard)}</Col>
        <Col>
          <Card.Root
            className="mb-3 p-3"
            style={{ width: "100%", maxWidth: "850px" }}
          >
            <Card.Body
              gap="2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Title mt="2">
                <b>See More Projects</b>
              </Card.Title>

              <Icon fontSize="2xl" color="white.700">
                <a href="https://github.com/tlynx538">
                  <GrLinkNext />
                </a>
              </Icon>
            </Card.Body>
          </Card.Root>
        </Col>
      </Container>
    </Col>
  );
}
