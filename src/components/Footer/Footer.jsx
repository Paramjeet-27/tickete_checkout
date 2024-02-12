import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src="tickete_white.png" alt="tickete_logo" width="200rem" />
          </div>
          <div className={styles.imageMobile}>
            <img src="tickete_white.png" alt="tickete_logo" width="100rem" />
          </div>
          <hr className={styles.hr} />
          <div className={styles.footerLinks}>
            <span>Made with ❤️</span>
            <span>&#x2022;</span>
            <span>
              <a
                href="https://www.tickete.co/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy policy
              </a>
            </span>
            <span>&#x2022;</span>
            <span>
              <a
                href="https://www.tickete.co/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of usage
              </a>
            </span>
            <span>&#x2022;</span>
            <span>
              <a
                href="https://www.tickete.co/cancellation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cancellation policy
              </a>
            </span>
            <span>&#x2022;</span>
            <span>
              <a
                href="https://www.tickete.co/sitemap/cities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </a>
            </span>
          </div>
          <div className={styles.footerLinksMobile}>
            <span>Made with ❤️</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
