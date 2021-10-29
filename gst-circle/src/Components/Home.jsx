import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const list = <FontAwesomeIcon icon ={faCheckCircle} />


function Home(){
    return (

<div className="text-black bg--100 bg-blue-100 grid p-28 text-xl lg:grid-cols-2 grid-cols-1">
<div>
GST Registration is the same all over India. But the department is regularly updating the procedures and follow-ups day by day. So, We are pretty much sharply following the developments in the area of GST. GST
registration is going through several processes those are as follows
<ul className="lg:ml-40 md:ml-40 space-y-3 mt-12">
    <li>{list} Appling for the GST</li>
    <li>{list} Aaadhar Approval</li>
    <li>{list} Queries Managments</li>
    <li>{list} Site Verification</li>
    <li>{list} Login ID &amp; Password Generation</li>
    <li>{list} Certificate Download</li>
</ul>
</div>
<div>
<img className="w-full lg:mt-0 mt-20" src="https://i.ibb.co/nmFFyW5/GST-Image-removebg-preview.png" alt="GST-removebg-preview"/>
</div>
</div>
)
}

export default Home;