import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Letter() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [sym_no, setSym_no] = useState('');
    const [reg_no, setReg_no] = useState('');
    const [insti_name, setInsti_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // name="+$_GET['name']+"&sym_no="+$_GET['sym_no']+"&reg_no="+$_GET['reg_no']+"&insti_name="+$_GET['insti_name']+"&email="+$_GET['email']+"&phone="+$_GET['phone']+"

    const date = new Date().toISOString().split('T')[0];
    // const date = new NepaliDate();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);

        //verification if allowed
        if(searchParams.get('name')==="" || !searchParams.get('name')){
            navigate('/');
        }

        setName(searchParams.get('name'));
        setSym_no(searchParams.get('sym_no'));
        setReg_no(searchParams.get('reg_no'));
        setInsti_name(searchParams.get('insti_name'));
        setEmail(searchParams.get('email'));
        setPhone(searchParams.get('phone'));
    }, [])
    const clickhandel = () => {
        const content = document.querySelector("#blockToPrint").innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>From: SHREE DURGA MODEL SECONDARY SCHOOL</title></head><body>');
        printWindow.document.write(content);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    }
    return (
        <>
            <div style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
                <button style={{ padding: "10px 40px", borderRadius: "3px", background: "linear-gradient(45deg, green, yellow)", outline: "none", border: "none", color: "white", fontSize: "larger", cursor: "pointer", boxShadow: "0 0 5px rgb(47, 44, 44)" }} onClick={clickhandel}>Download</button>
            </div>
            <div id='blockToPrint' style={{ padding: "0 10px" }}>
                <div id="letter" style={{ color: "black", marginTop: "10px" }} className="main">
                    <table style={{ width: "100%" }}>
                        <tbody>
                            <tr>
                                <th>
                                    <h1 style={{ fontWeight: "bolder", margin: '0' }}>श्री दुर्गा मोडेल सेकेन्डरी स्कूल</h1>
                                </th>
                            </tr>
                            <tr><th><p style={{ margin: "0" }}>बरेवा, बैरिया (बारा)</p>
                            </th>
                            </tr>
                            <tr>
                                <th><small style={{ margin: "0" }}>स्थापित:2004</small></th>
                            </tr>
                            <tr>
                                <th>
                                    <h1 style={{ fontWeight: "bolder", margin: "0" }}>Shree Durga Model Sec. School</h1>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <p style={{ margin: "0" }}>Barewa, Bairiya(Bara)</p>
                                </th>
                            </tr>
                            <tr>
                                <th><small style={{ margin: "0" }}>EST:2004</small></th>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ margin: "0" }}>पतर नो:</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ margin: "0" }}>चलानी नो:</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ margin: "0", textAlign: "right" }}>मिति: {date}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <hr style={{
                                        display: "block",
                                        backgroundColor: "black",
                                        marginTop: "0.5em",
                                        marginBottom: "0.5em",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        borderStyle: "inset",
                                        borderWidth: "5px"
                                    }} />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <h5>Subject: OJT को लागि सिपरिश सम्बन्धमा </h5>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <p style={{ fontWeight: "bold", margin: "0" }}>{insti_name}</p>
                                    प्रस्तुत बिषयमा श्री दुर्गा माध्यमिक बिद्यालय बरेवा, बैरिया बारा प्राबिधिकधार तर्फका कक्षा १२ का
                                    विद्यार्थी तपाइको संस्थामा नियमित रुपमा उपस्थित भई आफ्नो ६ महिने OJT कार्य सम्पन्न गर्न इच्छुक
                                    रहेकोले तपसिलका सिफारिश गरिएका विद्यार्थीलाई OJT कार्यमा सहभागी गराई उचित सहयोग गरि दिनु हुन श्री
                                    दुर्गा माध्यमिक विद्यालय हार्दिक अनुरोध गर्दछ ।
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ margin: "50px 0", marginBottom: "0", fontWeight: "bold" }}>
                        <p style={{ margin: "0 0" }}>तपशिल</p>
                        <table style={{ width: "100%", border: "1px solid gray" }} className="table mb-5">
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: "1px solid gray", borderRight: "1px solid gray" }}>S.No</th>
                                    <th style={{ borderBottom: "1px solid gray", borderRight: "1px solid gray" }}>Student Name</th>
                                    <th style={{ borderBottom: "1px solid gray", borderRight: "1px solid gray" }}>Symbol No</th>
                                    <th style={{ borderBottom: "1px solid gray" }}>Registration No</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th style={{ borderRight: "1px solid gray" }}>1.</th>
                                    <td style={{ borderRight: "1px solid gray" }}>{name}</td>
                                    <td style={{ borderRight: "1px solid gray" }}>{sym_no}</td>
                                    <td>{reg_no}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <table style={{ width: "100%", margin: "20px 0" }}>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: "right" }}>
                                    <p>..............................................</p>
                                    <h4>प्.अ./प्रचाया </h4>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default Letter
