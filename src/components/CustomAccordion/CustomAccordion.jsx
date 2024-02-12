import { useState } from "react";
import styles from "./CustomAccordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const CustomToggle = ({ children, eventKey }) => {
  const [active, setActive] = useState("");
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <p className={styles.cardQuestions} onClick={decoratedOnClick}>
      <span>+</span>
      {children}
    </p>
  );
};

const CustomAccordion = ({ questionNumber, question, answer }) => {
  return (
    <>
      <div className={styles.container}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <CustomToggle eventKey={`${questionNumber}`}>
                {`${question}`}
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={`${questionNumber}`}>
              <Card.Body style={{ color: "gray" }}>{`${answer}`}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};
export default CustomAccordion;
