import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiVisualstudio,
  DiTerminal,
  DiWindows,
  DiHtml5,
  DiCss3,
  DiScrum,
  DiSpark,
} from "react-icons/di";
import { LiaJava } from "react-icons/lia";
import {
  SiIntellijidea,
  SiSpringboot,
  SiJirasoftware,
  SiHibernate,
  SiAmazonwebservices,
  SiMysql,
  SiAmazondynamodb,
  SiApachekafka,
  SiRabbitmq,
  SiSentry,
} from "react-icons/si";

const cards = [
  { type: "BE", card: <LiaJava /> },
  { type: "BE", card: <SiMysql /> },
  { type: "BE", card: <SiAmazondynamodb /> },
  { type: "BE", card: <SiSpringboot /> },
  { type: "BE", card: <SiHibernate /> },
  { type: "BE", card: <SiApachekafka /> },
  { type: "BE", card: <SiRabbitmq /> },
  { type: "BE", card: <DiSpark /> },
  { type: "FE", card: <DiJavascript1 /> },
  { type: "FE", card: <DiReact /> },
  { type: "FE", card: <DiHtml5 /> },
  { type: "FE", card: <DiCss3 /> },
  { type: "FE", card: <DiNodejs /> },
  { type: "BE", card: <SiAmazonwebservices /> },
  { type: "TOOL", card: <DiGit /> },
  { type: "TOOL", card: <SiIntellijidea /> },
  { type: "TOOL", card: <DiVisualstudio /> },
  { type: "TOOL", card: <DiTerminal /> },
  { type: "TOOL", card: <SiJirasoftware /> },
  { type: "TOOL", card: <DiScrum /> },
  { type: "TOOL", card: <DiWindows /> },
  { type: "TOOL", card: <SiSentry /> },
];

function TechStackCard({ type }) {
  const filteredCards = type
    ? cards.filter((card) => card.type === type)
    : cards;

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {type === "ALL"
        ? cards.map((card, index) => (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              {card.card}
            </Col>
          ))
        : filteredCards.map((card, index) => (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              {card.card}
            </Col>
          ))}
    </Row>
  );
}

export default TechStackCard;
