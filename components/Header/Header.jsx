'use client'
import React from "react";
import { useState } from "react";
import "../../styles/header.css";
import { Drawer ,Box} from "@mui/material";
import { colors } from "../../styles/colors";
import Link from "next/link";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:300,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const nav_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#start",
    display: "Training",
  },
  {
    path: "#pricing",
    display: "Pricing",
    
  },
  {
    path: "#about",
    display: "About as",
    
  },
];

const Header = () => {
  const [open,setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [show , setShow ] = useState(false)
  const handleOpen = () => setOpen2(true);
  const handleClose = () => setOpen2(false);
  return (
    <header className="header w-100">
      <div className="container d-flex align-items-center justify-content-between">
        {/*__________LOGO________ */}
        <div className="logo brand d-flex justify-content-center align-items-center">
          <Link className="logo__img" href={'./'}>
            <img src={"./assets/img/logo.jpg"} alt="" />
          </Link>
          <h3 style={{ marginBottom: "0px" }}></h3>
        </div>
        {/*________navigation menu _____*/}
        <div className="navigation">
          <ul className="menu d-none d-md-flex" style={{ marginBottom: "0px" }}>
            {nav_links.map((item, index) => (
              <li className="nav__item" key={index}>
                <Link href={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex gap-2">
            <button className="btn btn-light" id="register__btn" onClick={handleOpen} >Register</button>
            <button className="btn d-md-none d-block" onClick={()=>setOpen(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                d="M20 7L4 7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                />
                <path
                d="M15 12L4 12"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                />
                <path
                d="M9 17H4"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
                />
            </svg>
            </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={()=>setOpen(false)}
        anchor="left"
        className="drawerHeader"
      >
        <Box width={300}>
          <div className="py-3 px-3">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
            <div className="logo brand d-flex justify-content-center align-items-center">
          <div className="logo__img">
            <img src={"./assets/img/dumble.png"} alt="" />
          </div>
          <h3 style={{ marginBottom: "0px" }}>Fitnecy </h3>
        </div>
              <button className="close d-flex justify-content-center align-items-center rounded p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={() => setOpen(false)}
                >
                  <g id="Menu / Close_LG">
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <ul style={{ paddingLeft: "0px" }} className="mt-2">
              <li
                className="border rounded d-flex align-items-center justify-content-between px-2 py-2 mt-2"
                style={{ color: colors.one }}
              >
                <Link href={"/"} style={{textDecoration : 'none',color : 'black',width : "100%",height : "100%"}}>
                  Home
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="border rounded d-flex align-items-center justify-content-between px-2 py-2 mt-2">
                <Link href={"#services"} style={{textDecoration : 'none',color : 'black',width : "100%",height : "100%"}}>
                  Services
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="border rounded d-flex align-items-center justify-content-between px-2 py-2 mt-2">
                <Link href={"/about"} style={{textDecoration : 'none',color : 'black',width : "100%",height : "100%"}}>
                  About us
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="border rounded d-flex align-items-center justify-content-between px-2 py-2 mt-2">
                <Link href={"#start"} style={{textDecoration : 'none',color : 'black' ,width : "100%",height : "100%"}}>
                  Training
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="border rounded d-flex align-items-center justify-content-between px-2 py-2 mt-2">
                <Link href={"#pricing"} style={{textDecoration : 'none',color : 'black',width : "100%",height : "100%"}}>
                  Pricing
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 7L15 12L10 17"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
            <button
              className="btn btn-light d-sm-none d-flex gap-2 align-items-center justify-content-center fw-600 w-100"
              style={{ fontSize: "14px" }}
              onClick={()=>setOpen2(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 16 16"
                fill="#000000"
                className="bi bi-person-circle"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              Sign in
            </button>
          </div>
        </Box>
      </Drawer>

      <Modal open={open2} onClose={()=>setOpen2(false)}>
        <Box  className = "signInModal">
          <div className="d-flex justify-content-between align-items-center">
            <img src={'./assets/img/logo.jpg'} alt="" width={100} />
            <svg  
                  className="closeModal"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={() => setOpen2(false)}
                >
                  <g id="Menu / Close_LG">
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
            </svg>
          </div>
          <h2 style={{ marginBottom: "0px" }} className="fw-bold mt-2">
            {!show ? 'Sign In' : 'Create your Account'}
          </h2>
          <p style={{ marginBottom: "0px", color: "var(--gray)" }}>
            {!show? "Let's connect to your account" : "Let create your personal account"}
          </p>
          <form className="mt-3">
            {
                !show ? (
                    <>
                        <div class="input-floating-label form-floating mb-4">
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            
                            
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div class="input-floating-label form-floating position-relative">
                        <input
                            name="password"
                            type="password"
                            class="form-control fakepassword pe-6"
                            id="psw-input"
                            placeholder="Enter your password"
                            
                        />
                        <label htmlFor="floatingInput">Password</label>
                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                        </div>
                        <div id="pswmeter" class="mt-3 password-strength-meter">
                        <div class="password-strength-meter-score"></div>
                        </div>

                        <div class="align-items-center mt-0">
                        <div class="d-grid">
                            <button class="btn btn-dark mb-0" type="button">
                            Sign In
                            </button>
                        </div>
                        </div>
                        <p className="d-flex justify-content-center align-items-center mt-3" style={{marginBottom : '0px',fontSize:"14px"}}>Not registered yet?<button onClick = {()=>setShow(true)} style={{color : "#C65BCF",backgroundColor : 'white',border : 'none'}}> Create an account</button></p>
                    </>
                ):(
                   <>
                     
                    <div className="d-flex gap-3">
                        <div class="input-floating-label form-floating mb-4">
                            <input
                                type="text"
                                name="firstname"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">First Name</label>
                            </div>
                        <div class="input-floating-label form-floating mb-4">
                            <input
                                type="text"
                                name="lastname"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                
                            />
                            <label for="floatingInput">Last Name</label>
                            </div>

                            
                      </div>
                      <div class="input-floating-label form-floating mb-4">
                        <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                           
                        />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="d-flex gap-3">
                        <div class="input-floating-label form-floating mb-4">
                            <input
                                type="text"
                                name="day"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                
                            />
                            <label for="floatingInput">Day</label>
                            </div>
                        <div class="input-floating-label form-floating mb-4">
                            <input
                                type="text"
                                name="month"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                
                            />
                            <label for="floatingInput">Month</label>
                            </div>
                        <div class="input-floating-label form-floating mb-4">
                            <input
                                type="text"
                                name="year"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                
                            />
                            <label for="floatingInput">Year</label>
                            </div>
                    </div>

                        <div class="input-floating-label form-floating position-relative">
                        <input
                            name="password"
                            type="password"
                            class="form-control fakepassword pe-6"
                            id="psw-input"
                            placeholder="Enter your password"
                            
                        />
                        <label for="floatingInput">Password</label>
                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                        </div>
                        <div id="pswmeter" class="mt-3 password-strength-meter">
                        <div class="password-strength-meter-score"></div>
                        </div>

                        <div class="align-items-center mt-0">
                        <div class="d-grid">
                            <button class="btn btn-dark mb-0" type="button" >
                             Create Account
                            </button>
                        </div>
                        </div>
                        <p className="d-flex justify-content-center align-items-center mt-3" style={{marginBottom : '0px',fontSize:"14px"}}>Already have an account? <button onClick = {()=>setShow(false)} style={{color : "#C65BCF",backgroundColor : 'white',border : 'none'}}> Sign in here</button></p>
                   </>
                )
            }
            
          </form>
        </Box>
      </Modal>
    </header>
  );
};
export default Header;
