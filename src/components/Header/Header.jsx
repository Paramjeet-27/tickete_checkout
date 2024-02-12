import styles from "./Header.module.css";
import { LockFill, QuestionCircle, ArrowLeft } from "react-bootstrap-icons";

const Header = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div>
            <img
              src="tickete_black.png"
              alt="tickete_logo"
              width="150rem"
              className={styles.webHomeIcon}
            />
            <span className={styles.mobileHomeArrow}>
              <ArrowLeft />
            </span>
          </div>
          <div className={styles.checkout}>
            <p>
              <LockFill />
            </p>
            <p>Checkout</p>
          </div>
          <div className={styles.help}>
            <p>
              <QuestionCircle />
            </p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
