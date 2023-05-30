import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* Item 1 */}
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Item 2*/}
      <div className={styles.item}>
        {/* Card 1*/}
        <div className={styles.card}>
          <h1 className={styles.motto}>
            OH! YES WE DID. THE TOMMY PIZZA, WELL BAKED SLICE OF PIZZA
          </h1>
        </div>

        {/* Card 2*/}

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Don Road #304. <br />
            NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304. <br />
            NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304. <br />
            NewYork, 85022 <br />
            (602) 867-1010
          </p>
          <p className={styles.text}>
            1654 R. Don Road #304. <br />
            NewYork, 85022 <br />
            (602) 867-1010
          </p>
        </div>

        {/* Card 3*/}
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
