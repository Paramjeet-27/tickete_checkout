import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";
import PaymentAccordion from "../PaymentAccordion/PaymentAccordion";
import TripSummary from "../TripSummary/TripSummary";
import styles from "./PaymentSummary.module.css";
import { InfoCircleFill } from "react-bootstrap-icons";
import CustomModal from "../CustomModal/CustomModal";

const PaymentSummary = () => {
  const [show, setShow] = useState(false);
  const onInfoCardClickHandler = () => setShow(!show);
  return (
    <>
      <CustomModal
        title="Cancelation Policy Custom"
        show={show}
        onCloseHandler={onInfoCardClickHandler}
      >
        <p>These tickets can't be cancelled or rescheduled.</p>
        <hr />
        <p>
          <a href="https://www.tickete.co/cancellation/" target="_blank">
            Learn more about our cancellation policy
          </a>
        </p>
      </CustomModal>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.paymentSection}>
            <h1>Confirm & pay</h1>
            <div className={styles.infocard_1} onClick={onInfoCardClickHandler}>
              <div className={styles.card}>
                <h6>Free Cancellation</h6>
                <p>Tickets can be cancelled by so and so date</p>
              </div>
              <div className={styles.infoIcon}>
                <InfoCircleFill />
              </div>
            </div>
            <div className={styles.detialsForm}>
              <h4>Enter Your Details</h4>
              <p>We will be sending your details to the address below.</p>
              <div className={styles.detailsFormInputs}>
                <div className={styles.dfi_1}>
                  <CustomInput type="text" placeholder="Full Name" />
                </div>
                <div className={styles.dfi_2}>
                  <CustomSelect title="Country Code" width={48} />
                  <CustomInput
                    type="text"
                    placeholder="Phone Number"
                    width={48}
                  />
                </div>
                <div className={styles.dfi_2_mobile}>
                  <CustomSelect title="Country Code" width={0} />
                  <CustomInput
                    type="text"
                    placeholder="Phone Number"
                    width={0}
                  />
                </div>
                <div className={styles.dfi_3}>
                  <CustomInput type="text" placeholder="Email" width={48} />
                  <CustomInput
                    type="text"
                    placeholder="Confirm Email"
                    width={48}
                  />
                </div>
                <div className={styles.dfi_3_mobile}>
                  <CustomInput type="text" placeholder="Email" width={0} />
                  <CustomInput
                    type="text"
                    placeholder="Confirm Email"
                    width={0}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.additionalDetialsForm}>
              <h4>Additional Information</h4>
              <p>We need few more details to complete your reservation.</p>
              <div className={styles.detailsFormInputs}>
                <div className={styles.dfi_2}>
                  <CustomInput
                    type="text"
                    placeholder="Input Label"
                    width={48}
                  />
                  <CustomSelect title="Select" width={48} />
                </div>
                <div className={styles.dfi_2_mobile}>
                  <CustomInput
                    type="text"
                    placeholder="Input Label"
                    width={0}
                  />
                  <CustomSelect title="Select" width={0} />
                </div>
                <div className={styles.dfi_1}>
                  <CustomSelect title="Multiselect" width={100} />
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.paymentMethod}>
              <h4>Select your mode of payment</h4>
              <p>Payment with ticket are secure and encrypted</p>
              <div className={styles.paymentMethods}>
                <PaymentAccordion />
              </div>
            </div>
            <hr />
            <br />
            <p className={styles.totalPayable}>Total Payable: $567</p>
            <div className={styles.infocard_2}>
              <div className={styles.infoIcon}>
                <InfoCircleFill />
              </div>
              <div className={styles.card}>
                <p>You will be charged in AED</p>
                <p>
                  The price shown here is in US Dollar (USD) as per the current
                  conversion rate. You will be charged in United Arab Emirates
                  Dirham (AED).
                </p>
              </div>
            </div>
          </div>
          <div className={styles.summarySection}>
            <TripSummary />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default PaymentSummary;
