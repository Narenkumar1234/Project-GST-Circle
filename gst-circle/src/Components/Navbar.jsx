import React from "react";
import "../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' 
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const hamburger = <FontAwesomeIcon icon={faBars} />
const drop = <FontAwesomeIcon icon={faCaretDown} />

function Navbar(){
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
    <>
      <nav className="lg:px-20 bg-blue-300 shadow-lg ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           <div className="flex"><a className=" py-1 px-1 " href="www.google.com">
           <img className="rounded-xl" src="https://i.ibb.co/wQ0Tw3f/GST-removebg-preview.png" alt="GST" width="140" height="120" border="0"/>
           </a></div>
            <button className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none transition duration-300" 
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}> <i>{hamburger}</i>
            </button>
          </div>
          <div className={"align-middle lg:flex flex-grow mx-auto" + (navbarOpen ? " flex " : " hidden")} >
           <ul  className={"text-base flex flex-col lg:flex-row list-none lg:ml-auto" + (navbarOpen ? " mx-auto " : "")} > 
            <li className="dropdown nav-item dropdown-hover">
              <h1 tabindex="0" className="btn btn-ghost ml-6 lg:ml-0">GST <span className="ml-2">{drop}</span></h1> 
              <ul tabindex="0" className="text-gray-900 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="www.google.com">GST MONTHLY RETURN FILING</a>
                </li> 
                <li>
                  <a href="www.google.com">GST MODIFICATIONS -AMEMNDMENTS</a>
                </li> 
                <li>
                  <a href="www.google.com">GST CANCELLATION / SURRENDER</a>
                </li>
                <li>
                  <a href="www.google.com">GST REVOCATION</a>
                </li>
                <li>
                  <a href="www.google.com">E-WAY BILL REGISTRATION</a>
                </li>
                <li>
                  <a href="www.google.com">E-WAY BILL PROCESSING</a>
                </li>
                <li>
                  <a href="www.google.com">INVOICING ASSISTANCE</a>
                </li>
              </ul>
            </li>


            <li className="dropdown nav-item dropdown-hover">
              <h1 tabindex="0" className="btn btn-ghost ml-6 lg:ml-0">Income Tax <span className="ml-2">{drop}</span></h1> 
              <ul tabindex="0" className="text-gray-900 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="www.google.com">ITR 1 FORM FILING</a>
                </li> 
                <li>
                  <a href="www.google.com">ITR2 FORM FILING</a>
                </li> 
                <li>
                  <a href="www.google.com">ITR3 FORM FILING</a>
                </li>
                <li>
                  <a href="www.google.com">ITR4 FORM FILING</a>
                </li>
                <li>
                  <a href="www.google.com">TDS RETURN FILING</a>
                </li>
                <li>
                  <a href="www.google.com">TDS CLAIM</a>
                </li>
              </ul>
            </li>

            <li className="dropdown nav-item dropdown-hover">
              <h1 tabindex="0" className="btn btn-ghost ml-6 lg:ml-0">PAN SERVICES <span className="ml-2">{drop}</span></h1> 
              <ul tabindex="0" className="text-gray-900 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="www.google.com">APPLY PAN NEW CARD</a>
                </li> 
                <li>
                  <a href="www.google.com">APPLY PAN DUPLICATE</a>
                </li> 
                <li>
                  <a href="www.google.com">APPLY CORRECTION IN PAN</a>
                </li>
                <li>
                  <a href="www.google.com">E-PAN CARD DOWNLOAD – PVC CARD</a>
                </li>
                </ul>
            </li>


            <li className="dropdown nav-item dropdown-hover">
              <h1 tabindex="0" className="btn btn-ghost ml-6 lg:ml-0">MSME (SSI) <span className="ml-2">{drop}</span></h1> 
              <ul tabindex="0" className="text-gray-900 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="www.google.com">APPLY NEW UDHAYAM AADHAR</a>
                </li> 
                <li>
                  <a href="www.google.com">MODIFICATION IN UDHAYAM AADHAR</a>
                </li> 
                <li>
                  <a href="www.google.com">UDYOG AADHAR TO UDHAYAM AADHAR MIGRATION</a>
                </li>
                </ul>
            </li>

            <li className="dropdown dropdown-hover nav-item cursor-pointer ">
              <h1 tabindex="0" className="btn btn-ghost ml-6 lg:ml-0">Others <span className="ml-2">{drop}</span></h1> 
              <ul tabindex="0" className="text-gray-900 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a href="www.google.com">AD CODE REGISTRATION SERVICES</a>
                </li> 
                <li>
                  <a href="www.google.com">IEC REGISTRATION</a>
                </li>
                <li>
                  <a href="www.google.com">TRADEMARK REGISTRATION</a>
                </li>
              </ul>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </>
    );
}

export default Navbar;