import { Col, Row } from "react-bootstrap";
import styles from "@/app/page.module.css";

const asciiArt = [
  "                   -`",
  "                  .o+`",
  "                 `ooo/",
  "                `+oooo:",
  "               `+oooooo:",
  "               -+oooooo+:",
  "             `/:-:++oooo+:",
  "            `/++++/+++++++:",
  "           `/++++++++++++++:",
  "          `/+++ooooooooooooo/`",
  "         ./ooosssso++osssssso+`",
  "        .oossssso-````/ossssss+`",
  "       -osssssso.      :ssssssso.",
  "      -osssssss/        osssso+++.",
  "     /ossssssss/        +ssssooo/-",
  "   `/ossssso+/:-        -:/+osssso+-",
  "  `+sso+:-`                 `.-/+oso:",
  " `++:.                           `-/+/",
  " .`                                 `",
].join("\n");

const skills = [
  ["Programming Languages:", "Python, JavaScript"],
  ["Agentic & AI:", "LangGraph, Langchain, Qdrant"],
  ["Data Engineering:", "Databricks, Snowflake, Azure Data Factory"],
  ["Databases & Warehouses:", "PostgreSQL, MySQL, MongoDB, SQL Server"],
  ["DevOps & Infra:", "RabbitMQ, Jenkins, Redis, Ansible, Azure DevOps, Grafana/Prometheus, ELK"],
];

export default function Skills() {
  return (
    <Row className={`${styles.neofetch} mt-2`}>
      <h3>&gt; skills</h3>
      <Col md={5} lg={5}>
        <pre
          className={styles.archAscii}
          style={{
            whiteSpace: "pre",
            fontFamily: '"DejaVu Sans Mono", monospace, monospace',
            fontVariantLigatures: "no-common-ligatures",
          }}
        >
          {asciiArt}
        </pre>
      </Col>

      <Col md={7} lg={7}>
        <div className={styles.systemInfo}>
          <p className={styles.systemTitle}>tlynx538@Mac-3873</p>
          {skills.map(([label, values]) => (
            <div className={styles.systemRow} key={label}>
              <b>{label}</b>
              <span>{values}</span>
            </div>
          ))}
        </div>
      </Col>

      <Col xs={12}>
        <p className={styles.artCredit}>
          Arch ASCII art from{" "}
          <a
            href="https://archlinux.org/packages/?name=screenfetch"
            target="_blank"
            rel="noopener noreferrer"
          >
            screenfetch 3.6.5-1
          </a>
          .
        </p>
      </Col>
    </Row>
  );
}
