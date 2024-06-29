import { FunctionComponent, useCallback } from "react";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  const onButtonsContainerClick = useCallback(() => {
    // Please sync "Enter Your Address" to the project
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Inner}>
        <div className={styles.wrapperLogoParent}>
          <div className={styles.wrapperLogo}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className={styles.scanCryptoContainerWrapper}>
            <div className={styles.scanCryptoContainer}>
              <div className={styles.typeWrapper}>
                <img
                  className={styles.typeIcon}
                  loading="lazy"
                  alt=""
                  src="/type.svg"
                />
              </div>
              <a className={styles.scanCrypto}>SCAN CRYPTO</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loadingOpenParent}>
        <div className={styles.loadingOpen}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.scanCrypto1}>
            <p className={styles.scan}>SCAN</p>
            <p className={styles.crypto}>CRYPTO</p>
          </div>
          <img
            className={styles.image1Icon1}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className={styles.image2Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.buttonsContainerWrapper}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsParent}>
              <div className={styles.buttons} onClick={onButtonsContainerClick}>
                <img
                  className={styles.downloadCloud02Icon}
                  alt=""
                  src="/downloadcloud02.svg"
                />
                <div className={styles.download}>Download</div>
              </div>
              <div className={styles.buttonsWrapper}>
                <div className={styles.buttons1}>
                  <div className={styles.howItWork}>How it work</div>
                </div>
              </div>
              <div className={styles.iconButton}>
                <img
                  className={styles.headphones01Icon}
                  loading="lazy"
                  alt=""
                  src="/headphones01.svg"
                />
                <img className={styles.badgeDot} alt="" src="/badge--dot.svg" />
              </div>
            </div>
            <div className={styles.version40Wrapper}>
              <div className={styles.version40}>Version 4.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
