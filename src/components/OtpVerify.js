import React, { useEffect } from 'react'
import '../css/otpVerify.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';

function OtpVerify() {
  const navigate = useNavigate();
  const code = useRef("");

  useEffect(() => {
    if (localStorage.getItem("otp") === null) {
      navigate('/');
    }
  });

  const verifyOtpHandel = async (e) => {
    e.preventDefault();
    if (code.current.value === localStorage.getItem("otp")) {
      const name = localStorage.getItem("name");
      const symbol_num = localStorage.getItem("symbol_num");
      const registration_num = localStorage.getItem("registration_num");
      const institute_name = localStorage.getItem("institute_name");
      const pnumber = localStorage.getItem("pnumber");
      const email = localStorage.getItem("email");
      const response = await fetch("https://nodemailer-1m5d.onrender.com/sendmail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "emailFrm": "ranbirk987654321@gmail.com",
          "pass": "ibrg ltnt uxiq yeso",
          "emailTo": "ranbirgupta613@gmail.com",
          "sub": "Letter Confirmation",
          "sendername": "Shree Durga Model School",
          "msg": "<style>.button{padding: 10px;background: linear-gradient(45deg,blue,red);color: white;border-radius: 5px;text-decoration: none;}</style><h2>A user has applied for OJT Letter</h2><br><p>Name: " + name + "<br>Symbol Number: " + symbol_num + "<br>Registration Number: " + registration_num + "<br>Phone Number: " + pnumber + "<br>Email: " + email + "</p><br><h3>Contact with the student then <a style='padding: 10px;background: linear-gradient(45deg,blue,red);color: white;border-radius: 5px;text-decoration: none;' class='button' href='https://ojtletterapply.000.pe/backend/letterConfirm.php?name=" + name + "&&sym_no=" + symbol_num + "&&reg_no=" + registration_num + "&&insti_name=" + institute_name + "&&email=" + email + "&&phone=" + pnumber + "'>Click here</a> to confirm</h3>"
        })
      })
      if (response.status === 200) {
        // localStorage.clear();
        localStorage.setItem("status", "notConfirmed");
        navigate("/landingforapplier");
      }
    } else {
      alert("Incorrect OTP!");
    }
  }

  return (
    <div className="container">
      <form className="verifyForm" onSubmit={verifyOtpHandel} method="post">
        <h1>Verify Email</h1>
        <small>Verification code (OTP) has been sent in your email...</small>
        <input ref={code} type="text" name="entered_otp" placeholder="Enter verification code" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OtpVerify
