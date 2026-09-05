import { Card, Icon, Badge, HStack } from "@chakra-ui/react";

import { GrLinkNext } from "react-icons/gr";
import { Row, Col, Container } from "react-bootstrap";
import styles from "@/app/page.module.css";

export default function Projects() {
  const projectList = [
    {
  title: "Multi-Agent Catalog Parser",
  link: "https://github.com/tlynx538/Multi-Agent-Catalog-Parser",
  description:
    "LangGraph-based agentic pipeline for converting vendor PDF catalogs and quotations into validated structured product and commercial records.",
  tech: [
    { label: "LangGraph", color: "purple" },
    { label: "Qdrant", color: "red" },
    { label: "Python", color: "blue" },
    { label: "Pydantic", color: "teal" },
    { label: "OpenDataLoader", color: "orange" },
  ],
},
    {
      title: "Tafsiri-S2ST",
      link: "https://github.com/mbwika/Tafsiri-S2ST",
      description: (
        <>
          <span>
            <a
              href="https://artscilab.utdallas.edu/2025/04/04/tafsiri-s2st/"
              target="_blank"
              rel="noopener noreferrer"
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
      className={`${styles.projectCard} mb-3 p-3`}
    >
      <Card.Body gap="2">
        <Card.Title className={styles.projectTitle} mt="2">
          <b>{project.title}</b>
        </Card.Title>
        <Card.Description className={styles.projectDescription}>{project.description}</Card.Description>
        <Row md={1}>
          <Col>
            <p className={styles.projectMeta}>TECH USED</p>
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
      <Card.Footer className={styles.projectFooter} justifyContent="flex-end">
        <Icon className={styles.projectArrow} fontSize="2xl">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <GrLinkNext />
          </a>
        </Icon>
      </Card.Footer>
    </Card.Root>
  );

  return (
    <Col md={8}>
      <h3 className="mb-3 mt-3">&gt; Projects</h3>
      <Container className={styles.projectList}>
        <Col>{projectList.map(renderProjectCard)}</Col>
        <Col>
          <Card.Root
            className={`${styles.projectCard} ${styles.projectMore} mb-3 p-3`}
          >
            <Card.Body
              gap="2"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Title className={styles.projectTitle} mt="2">
                <b>See More Projects</b>
              </Card.Title>

              <Icon className={styles.projectArrow} fontSize="2xl">
                <a
                  href="https://github.com/tlynx538"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
