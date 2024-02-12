import CustomButton from "../CustomButton/CustomButton";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import {
  TicketPerforatedFill,
  CalendarFill,
  AlarmFill,
  PeopleFill,
  PiggyBankFill,
  InfoCircle,
  StarFill,
} from "react-bootstrap-icons";
import styles from "./TripSummary.module.css";
import Accordion from "react-bootstrap/Accordion";

const TripSummary = () => {
  return (
    <>
      <h1 className={styles.mobileHeading}>Confirm & pay</h1>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <ImageCarousel />
        </div>
        <p>
          <span className={styles.miniIcons}>
            <StarFill />
          </span>
          <span className={styles.ratings}>4.9</span>(4.5k) | Category
        </p>
        <h6 className={styles.tripDescription}>
          Amsterdam open boat canal cruise - Live Guiye - from Annie Frank
          Housef
        </h6>
        <div className={styles.ticketType}>
          <p>
            <span className={styles.miniIcons}>
              <TicketPerforatedFill />
            </span>
            ticket type - variant
          </p>
        </div>
        <div className={styles.ticketDate}>
          <p>
            <span className={styles.miniIcons}>
              <CalendarFill />
            </span>
            day / month - date
          </p>
          <p className={styles.descriptions}>Duration</p>
        </div>
        <div className={styles.ticketGeneralTime}>
          <p>
            <span className={styles.miniIcons}>
              <AlarmFill />
            </span>
            Time
          </p>
          <p className={styles.descriptions}>Operating Hours: time to time</p>
        </div>
        <div className={styles.ticketGuests}>
          <p>
            <span className={styles.miniIcons}>
              <PeopleFill />
            </span>
            5 Guests
          </p>
        </div>
        <hr style={{ border: "dashed 1px black" }} />
        <div className={styles.paymentSummaryAccordion}>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className={styles.additionalData}>
                  View payment summary
                </span>
              </Accordion.Header>
              <Accordion.Body className={styles.psaBody}>
                <div>
                  <p>1 Adult</p>
                  <p>$567</p>
                </div>
                <div>
                  <p>Tickete Discount</p>
                  <p>-$56</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <hr />
        <div className={styles.paymentDetails}>
          <div className={styles.details}>
            <div className={styles.totalPayable}>
              <p>Total payable</p>
              <p>$567</p>
            </div>
            <p className={styles.savings}>
              <span className={styles.miniIcons}>
                <PiggyBankFill />
              </span>
              You Saved $60
            </p>
            <p className={styles.chargedAED}>
              You will be charged in AED{" "}
              <span>
                <InfoCircle />
              </span>
            </p>
          </div>
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
          <CustomButton btnName="Confirm & pay" btnVariant="dark" width={100} />
        </div>
      </div>
    </>
  );
};
export default TripSummary;
