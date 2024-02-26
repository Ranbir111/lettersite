import React from 'react'
import '../css/applyForm.css'

function GenerateForm() {
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

export default GenerateForm
