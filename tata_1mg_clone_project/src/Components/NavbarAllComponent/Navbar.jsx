import {  Link } from "react-router-dom";
import styles from './Styles/Navbar.module.css'
import NavbarSearchBar from "./NavbarSearchBar";
import NavbarDropdown from "./NavbarDropdown";
import { NavWrapper } from "./Styles/NavbarDropdown.styled";

// const links = [
//   {
//     to: "/",
//     spanText:"",
//     image:"	https://www.1mg.com/images/tata_1mg_logo.svg",
//     title: ""
//   },
//   {
//     to: "/",
//     image:"",
//     spanText:"",
//     title: "Medicines"
//   },
//   {
//     to: "/1",
//     image:"",
//     spanText:"safe",
//     title: "Lab Tests"
//   },
//   {
//     to: "/3",
//     image:"",
//       spanText:"",
//     title: "Consult Doctors"
//   },
//   {
//     to: "/4",
//     image:"",
//       spanText:"",
//     title: "COVID-19"
//   },
//   {
//     to: "/5",
//     image:"",
//       spanText:"",
//     title: "Ayurveda"
//   },
//   {
//     to: "/6",
//     image:"",
//     spanText:"save more",
//     title: "Care Plan"
//   },

// ];


// const NavLinks = [
//   {
//     to: "/",
//     image:"",
//     title: "Login / Sign up"
//   },
//   {
//     to: "/3",
//     image:"",
//     title: "Offer"
//   },
//   {
//     to: "/",
//     image:"	https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg",
//     title: ""
//   },
//   {
//     to: "/3",
//     image:"",
//     title: "Need Helps"
//   },
// ];

// NavLinks
// const baseStyle = {
//   color: "black",
//   textDecoration: "none",
//   textTransform: "uppercase"
// };

// const activeStyle = {
//   color: "red",
//   textDecoration: "none",
//   textTransform: "uppercase"
// };

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

      <NavWrapper>
      <NavbarDropdown />
      </NavWrapper>
    
    </>
//     <div>
        
// <div  style={{ border:"1px solid red" ,boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px", justifyContent:"space-evenly", display:"flex" }}>
//     <div style={{ border:"1px solid black" ,display: "flex" , marginRight:"80px" }}>
//       {links.map((item) => (
//         <NavLink
//         className={({ isActive }) => (isActive ? styles.activeStyle : styles.baseStyle)}
//         //   style={({ isActive }) => (isActive ? activeStyle : styles.baseStyle)}
//           to={item.to}
//           key={item.to}
//         >
//             <div style={{ border:"1px solid red" , marginLeft:"20px" }}>
//                 <img style={{ width:"90%" }} src={item.image} alt={item.image} />
//             <ul>
//                 <li className={styles.navTitle} >
//           {item.title}
//           <span>{item.spanText}</span>
//                 </li>
//             </ul>
//             </div>
//         </NavLink>
//       ))}


//       </div>
// {
//     NavLinks.map((secondItem)=>(<NavLink  to={secondItem.to} key={secondItem.to}>
//         <div style={{display:"flex" , border:"1px solid black" }}>
//             <div>
//                 <img style={{ width:"25px" , marginTop:"9px"}} src={secondItem.image} alt={secondItem.image} />
            
//             <ul>
//                 <li className={styles.secondNavlink} >{secondItem.title}</li>
//             </ul>
//             </div>
//         </div>
//     </NavLink>))
// }
//     </div>



//  </div>
  );
}

export default Navbar;
