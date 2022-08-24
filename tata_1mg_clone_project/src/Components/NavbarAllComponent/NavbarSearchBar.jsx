import React from 'react'
import {  Link } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import styles from './Styles/Navbar.module.css'

function NavbarSearchBar() {
  return (
    <>
      <div className={styles.search_navbar}>
        <div className={styles.search_navbar_navbar_inner_div}>
          <div style={{display:"flex" , textAlign:"center"}}>
            <div className={styles.location_div}>
              <i
                style={{ fontSize: "16px" , color:"gray" }}
              >
               <MdLocationOn />
              </i>
              <input
                className={styles.search_bar_extra}
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Enter Your City"
                style={{ fontWeight: "700" }}
              />
              <i
                style={{ fontSize: "16px" , color:"gray" }}
              >
                <BiCurrentLocation />
              </i>
                
              <div>
              </div>
            </div>
          </div>
          <div style={{padding:" 6px 13px 6px 1px" , width:"75%"}}>
            <div className={styles.search_bar_innerdiv} >
              <input
                className={styles.search_bar_extra}
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Search for Medicines and Health Products"
              />

              <div className={styles.search_icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.search_navbar_second}>
          <div className={styles.light_img}>
            <img
              src="https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg"
              alt=""
            />
          </div>
          <div style={{fontSize:"14px"}}>
            QUICK BUY! Flat 25% off on medicines*
          </div>
          <div className={styles.upload_btn}>
            <Link
              className={styles.upload_extr}
              to="/Upload"
              data-auto-upload-prescription="true"
            >
              <span>Upload</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarSearchBar
