import CustomAccordion from "../CustomAccordion/CustomAccordion";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./FAQBox.module.css";

const FAQBox = () => {
  return (
    <>
      <div className={styles.headContainer}>
        <div className={styles.container}>
          <div className={styles.headings_chats}>
            <p>Frequently asked questions</p>
            <p>Here are some of our most asked questions.</p>
            <div className={styles.chatOption}>
              <div className={styles.chat_text}>
                <h5>Still need help?</h5>
                <h5>We are here for you</h5>
                <CustomButton btnName="Chat with us" btnVariant="dark" />
              </div>
              <div className={styles.chat_icon}>
                <img src="/chat_icon.png" alt="chat_icon" width="150rem" />
              </div>
            </div>
          </div>
          <div className={styles.questions}>
            <div className={styles.accordionContainer}>
              <CustomAccordion
                questionNumber={1}
                question="This is the first Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={2}
                question="This is the second Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={3}
                question="This is the third Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={4}
                question="This is the fourth Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={5}
                question="This is the fifth Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={6}
                question="This is the sixth Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
              <CustomAccordion
                questionNumber={7}
                question="This is the seventh Question"
                answer="Answer is Lorem Ipsum random textzfdgdsfgdsfg sdgdfsg sdf gdsfgd"
              />
            </div>
          </div>
          <div className={styles.chatOptionMobile}>
            <div className={styles.chat_text}>
              <h5>Still need help?</h5>
              <h5>We are here for you</h5>
              <CustomButton btnName="Chat with us" btnVariant="dark" />
            </div>
            <div className={styles.chat_icon}>
              <img src="/chat_icon.png" alt="chat_icon" width="150rem" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQBox;
