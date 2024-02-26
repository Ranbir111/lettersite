import React, { useEffect } from 'react'
import '../css/landingPageForApplier.css'
import { useNavigate } from 'react-router-dom'


function LandingPageForApplier() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("status") !== "notConfirmed") {
            navigate('/');
        }
    });
    return (
        <div className="landingContainer">
            <div className="landingWrapper">
                <h1>Your Application has been submited...</h1>
                <h3>Wait for the confirmation or contact with....</h3>
                <div className="teacher-details">
                    <img src="images/mukesh-sir.jpg" alt="" />
                    <p>Name: Er Mukesh Yadav</p>
                    <p>Email: mukeshydv2048@gmail.com</p>
                    <p>Contact no: 9818319614</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPageForApplier
