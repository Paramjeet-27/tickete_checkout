import Accordion from "react-bootstrap/Accordion";
import styles from "./PaymentAccordion.module.css";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { PiggyBankFill, InfoCircle } from "react-bootstrap-icons";

const PaymentAccordion = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{ backgroundColor: "lightgray" }}>
          <span className={styles.additionalData}>
            <img src="/card.png" alt="card_icon" width="30rem" />
          </span>
          Credit and Debit Card
        </Accordion.Header>
        <Accordion.Body>
          <div className={styles.container}>
            <p className={styles.cardImages}>
              <img src="/card_images.png" alt="payment_cards" width={60} />
              <img src="/card_images.png" alt="payment_cards" width={60} />
            </p>
            <div className={styles.cardDetails_1}>
              <CustomInput type="text" placeholder="Name" width={48} />
              <CustomInput type="text" placeholder="Card Number" width={48} />
            </div>
            <div className={styles.cardDetails_1_mobile}>
              <CustomInput type="text" placeholder="Name" width={0} />
              <CustomInput type="text" placeholder="Card Number" width={0} />
            </div>
            <div className={styles.cardDetails_2}>
              <CustomInput type="text" placeholder="Expiry Date" width={48} />
              <CustomInput type="text" placeholder="CVV / CVC" width={48} />
            </div>
            <div className={styles.cardDetails_2_mobile}>
              <CustomInput type="text" placeholder="Expiry Date" width={0} />
              <CustomInput type="text" placeholder="CVV / CVC" width={0} />
            </div>
            <br />
            <hr />
            <br />
            <div className={styles.paymentDetails}>
              <div className={styles.details}>
                <p>Total payable: $567</p>
                <p>
                  You will be charged in AED
                  <span>
                    <InfoCircle />
                  </span>
                </p>
              </div>
              <div className={styles.savingDetails}>
                <p>
                  <span>
                    <PiggyBankFill />
                  </span>
                  You Saved $60
                </p>
              </div>
            </div>
            <div className={styles.brs}>
              <br />
              <br />
            </div>
            <div className={styles.finalPaymentButton}>
              <p>
                By clicking “confirm & pay”, you agree to
                <a href="https://www.tickete.co/terms/" target="_blank">
                  Tickete’s general terms and conditions
                </a>
                and
                <a href="https://www.tickete.co/cancellation/" target="_blank">
                  cancellation policy
                </a>
                .
              </p>
              <CustomButton btnName="Confirm and pay" btnVariant="dark" />
            </div>
            <div className={styles.finalPaymentButtonMobile}>
              <p>
                By clicking “confirm & pay”, you agree to
                <a href="https://www.tickete.co/terms/" target="_blank">
                  Tickete’s general terms and conditions
                </a>
                and
                <a href="https://www.tickete.co/cancellation/" target="_blank">
                  cancellation policy
                </a>
                .
              </p>
              <CustomButton
                btnName="Confirm and pay"
                btnVariant="dark"
                width={100}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="1" disabled>
        <Accordion.Header>
          <span className={styles.additionalData}>
            <img src="/apay.png" alt="card_icon" width="30rem" />
          </span>
          Comming Soon
        </Accordion.Header>
      </Accordion.Item>
      <Accordion.Item eventKey="2" disabled>
        <Accordion.Header>
          <span className={styles.additionalData}>
            <img src="/gpay.png" alt="card_icon" width="30rem" />
          </span>
          Comming Soon
        </Accordion.Header>
      </Accordion.Item>
    </Accordion>
  );
};

export default PaymentAccordion;
