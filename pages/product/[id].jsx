import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  const handleClick = (event) => {
    const { id, style } = event.currentTarget;
    setSize(id);
    const sizeElements = document.getElementsByClassName(styles.size);

    Array.from(sizeElements).forEach((element) => {
      element.style.backgroundColor = ""; // Khôi phục màu nền trắng cho tất cả các kích thước khác
    });
    style.backgroundColor = "#fa7f61";
    style.borderRadius = "50%";
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>${pizza.desc}</p>
        {/* Pizza's size */}

        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          {/* --------------------------Small-------------------------------*/}
          <div id="0" className={styles.size} onClick={handleClick}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          {/* --------------------------Medium-------------------------------*/}
          <div id="1" className={styles.size} onClick={handleClick}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          {/* --------------------------Large-------------------------------*/}
          <div id="2" className={styles.size} onClick={handleClick}>
            <Image src="/img/size.png" fill alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {/* option 1 */}
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          {/* option 2 */}
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          {/* option 3 */}
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          {/* option 4 */}
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
