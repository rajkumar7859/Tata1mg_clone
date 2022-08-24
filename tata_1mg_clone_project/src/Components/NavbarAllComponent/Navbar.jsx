import {  Link } from "react-router-dom";
import styles from './Styles/Navbar.module.css'
import NavbarSearchBar from "./NavbarSearchBar";
import NavbarDropdown from "./NavbarDropdown";

function Navbar() {
  return (
    <>
      <nav >
        <div className={styles.navbar}>
          <div className={styles.navlogo_tabs}>
            <div className={styles.logo}>
              <Link to="/">
                <img
                  src="https://www.1mg.com/images/tata_1mg_logo.svg"
                  alt="TATA 1mg"
                  className={styles.logo_img}
                />
              </Link>
            </div>
            <div className={styles.tabs}>
              <div>
                <Link to="/">Medicines</Link>
              </div>
              <div>
                <Link to="/LabTests">Lab Tests</Link>
                <div className={styles.safe_label}>
                  <div>SAFE</div>
                </div>
              </div>
              <div>
                <Link to="/AskDoctor">Consult Doctors</Link>
              </div>
              <div>
                <Link to="/Covid">Covid-19</Link>
              </div>
              <div>
                <Link to="/Ayurveda">Ayurveda</Link>
              </div>
              <div>
                <Link to="/CarePlan">Care Plan</Link>
                <div className={styles.safe_label}>SAVE MORE</div>
              </div>
            </div>
          </div>
          <div className={styles.login_Signup}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {
              "token" 
              ? 
              (
                <div className={styles.user_Profile}>
                  <div className={styles.user_Profile_Div} >
                    <ul className={styles.user_Profile_ul}>
                      <li className={styles.user_Profile_li} >Hi Welcome User</li>
                      <li className={styles.user_Profile_li}>
                        <a className={styles.user_Profile_a}
                          href=""
                          rel="nofollow"
                          data-auto-profile-view-profile="true"
                        >
                          <span>View Profile</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-order-history="true"
                        >
                          <span>My Orders</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-reorder="true"
                        >
                          <span>Previously Ordered Items</span>
                          <span className="styles__tag-new___10AJC">NEW</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a href="" data-auto-profile-labs="true">
                          <span>My Lab Tests</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-consultation="true"
                        >
                          <span>My Consultations</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a
                          href=""
                          rel="nofollow"
                          data-auto-profile-order-history="true"
                        >
                          <span>My Health Records</span>
                          <span className="styles__tag-new___10AJC">NEW</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a href="">
                          <span>Manage Payments</span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a href="">
                          <span className="styles__text-tagged___t9Qbh">
                            Care Plan
                          </span>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a href="" rel="nofollow" data-auto-profile-cash="true">
                          <div  className={styles.user_div}>
                            <div>
                              <div>NeuCoins</div>
                            </div>
                            <div className="styles__cash-number___3abO2">0</div>
                          </div>
                        </a>
                      </li>
                      <li className={styles.user_Profile_li}>
                        <a
                          onClick={() => {
                            "dispatch"("Logout"());
                          }}
                          href=""
                          data-auto-profile-logout="true"
                        >
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <a
                    onClick={() => {
                      "setshow"(true);
                      "setvisible"(true);
                    }}
                    className="logandsign"
                  >
                    {/* <Login show={true} /> */}
                    Login
                  </a>
                  |
                  <a 
                    onClick={() => {
                      "setshow"(false);
                      "setvisible"(true);
                    }}
                    className="logandsign"
                  >
                    {/* <Login show={false} /> */}
                    Sign Up
                  </a>
                </>
              )}
            </div>
            <div>Offers</div>
            <div className={styles.cart_icon}>
              <div
                className={styles.cart_svg}
                onClick={() => {
                  "nevigate"("/Cart");
                }}
              >
                <ul  className={styles.cart_svg_ul}>
                  <li>
                    <span className="CartCounterPopUp__summary___1Ff-x">
                      Order Summary
                    </span>
                    <span className="CartCounterPopUp__count___3cYl6">
                      {"cartData".length} Item
                    </span>
                  </li>
                  <li>
                    <Link
                      to="/Cart"
                      data-auto-proceed-cart="true"
                      data-attribute="cart-counter-popup"
                    >
                      <span className="CartCounterPopUp__proceed___vJFRh">
                        PROCEED TO CART
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.count}>{"cartData".length}</div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
      
      </nav>

      {/* **********************search bar ******************************** */}
      <NavbarSearchBar />
      <NavbarDropdown />
    </>

  );
}

export default Navbar;
