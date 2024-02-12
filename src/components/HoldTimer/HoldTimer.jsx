import { useEffect, useState } from "react";
import styles from "./HoldTimer.module.css";
import CustomButton from "../CustomButton/CustomButton";
import CustomModal from "../CustomModal/CustomModal";

const HoldTimer = () => {
  const [minutes, setMinutes] = useState(29);
  const [seconds, setSeconds] = useState(59);
  const [isRunning, setIsRunnning] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        } else if (seconds == 0 && minutes == 0) {
          setIsRunnning(false);
          setShow(!show);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <>
      <CustomModal title="Sorry about this" show={show}>
        <p>
          We couldn't hold your tickets any longer. To continue booking, go back
          and checkout.
        </p>
        <hr />
        <p>
          <a href="#">
            <CustomButton btnName="Go Back" btnVariant="black" width={100} />
          </a>
        </p>
      </CustomModal>
      <div className={styles.container}>
        Holding your tickets for {`${minutes}: ${seconds}`}
      </div>
    </>
  );
};
export default HoldTimer;
