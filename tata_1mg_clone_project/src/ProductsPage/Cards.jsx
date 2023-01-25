import axios from "axios";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { get_data } from "../Redux/actions";
import { AuthContext } from "../Redux/Login_Auth";
import styles from "./Cards.module.css";
const Cards = ({ value }) => {
  // console.log(value);
  
  const { isvisible, setvisible } = useContext(AuthContext);
  const { title, desc, image, mrp, off, price, review, star, id } = value;

  const { token } = useSelector((state) => {
    // console.log(state);
    return state;
  });
  const dispatch = useDispatch();

  // const notify = () => toast("Wow so easy!");

  const handleADD = () => {
    if (!token) {
      return setvisible(true);
    }

    axios
      .post(`https://mock-coding.onrender.com/Cart`, {
        qty: 1,
        image,
        title,
        desc,
        mrp,
        price,
        discount: off,
      })
      .then((data) => {
        get_data(dispatch);
        alert("Product added successfuly")
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles.box}>
      <Link
        className={styles.link_tag}
        to={`/Products/${"Featured"}/${id}`}
      ></Link>
      <div className={styles.imge}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.box2}>
        <div>{title}</div>
        <div>{desc}</div>
        <div className={styles.flexGrenn}>
          <div>
            <span>{star}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 51 48"
            >
              <path
                fill="#ffffff"
                stroke="none"
                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
              ></path>
            </svg>
          </div>
          <span>{review} ratings</span>
        </div>
        <div className={styles.flexPrice}>
          <span className={styles.mrp}>MRP</span>
          <span className={styles.mrp_sliced}> ₹{mrp}</span>
          <span className={styles.discount}>{off}% OFF</span>
        </div>
        <div className={styles.flexLast}>
          <div>₹{price}</div>
          <div>
            <div onClick={handleADD}>ADD</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cards;
