import React from 'react'
import '../css/applyForm.css'
import { useNavigate } from 'react-router-dom';

function ApplyForm() {
    const navigate = useNavigate();
    const submitHandel = async (e) => {
        e.preventDefault();
        const name = document.querySelector("[name='name']");
        const symbol_num = document.querySelector("[name='symbol_num']");
        const registration_num = document.querySelector("[name='registration_num']");
        const institute_name = document.querySelector("[name='institute_name']");
        const email = document.querySelector("[name='email']");
        const pnumber = document.querySelector("[name='pnumber']");

        const otp = Math.floor((Math.random() * 1000000) + 1);
        const response = await fetch("https://nodemailer-1m5d.onrender.com/sendmail", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "emailFrm": "ranbirk987654321@gmail.com",
                "pass": "ibrg ltnt uxiq yeso",
                "emailTo": await email.value,
                "sub": "Email Verification",
                "sendername": "Shree Durga Model School",
                "msg": "Verification code: " + otp
            })
        })
        if(response.status === 200){
            console.log("setting data to localstorage");
            localStorage.setItem("otp",otp);
            localStorage.setItem("name",name.value);
            localStorage.setItem("symbol_num",symbol_num.value);
            localStorage.setItem("institute_name",institute_name.value);
            localStorage.setItem("registration_num",registration_num.value);
            localStorage.setItem("email",email.value);
            localStorage.setItem("pnumber",pnumber.value);

            navigate("/otpverify");
        }
        else{
            alert("Failed to send Email!\nPlease retry");
        }
    }
    return (
        <div className="main-container">
            <form className="applyForm" action="#" onSubmit={submitHandel} method="post">
                <h1>Apply For Letter</h1>
                <input type="text" placeholder="Enter your name" name="name" required />
                <input type="text" placeholder="Enter your symbol number" name="symbol_num" required />
                <input type="text" placeholder="Enter your registration number" name="registration_num" required />
                <input type="text" placeholder="Name of shop or insitute" name="institute_name" required />
                <input type="email" placeholder="Enter your Email" name="email" required />
                <input type="text" placeholder="Enter your Contact number" maxLength="10" minLength="10" name="pnumber" required />
                <button type="submit">Apply</button>
            </form>
        </div>
    )
}

export default ApplyForm
