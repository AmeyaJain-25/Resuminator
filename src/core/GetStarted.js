import React, { useState } from 'react'
import "../App.css"
import { Button, } from 'reactstrap';
import { useHistory } from "react-router-dom"

const GetStarted = () => {

    const [inputData, setInputData] = useState({
        fullName: "",
        email: "",
        contactNo: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        country: ""

    })

    const { fullName, email, contactNo, line1, line2, state, city, country } = inputData


    const history = useHistory()

    //Input fields

    //TODO: (DONE)
    //Profile***
    //Full Name, Email, Address, Phone No. , Short Intro(About me)

    //

    //URLS*** 
    //LinkedIn, Github


    //Education***


    //Exp***


    //Skills***


    //Tech***


    //Acheivements / Publications***


    //Projects (TOP 3)***



    const handleOnChange = (name) => (e) => {

        setInputData({ ...inputData, [name]: e.target.value });
    };
    return (
        <>
            <header className="App-header">
                <Button color="warning" size="sm" onClick={() => history.goBack()}>Go Back</Button>

                <h1>Input Form</h1>
                <h2>Profile</h2>
                <input type="text" placeholder="Full Name" value={fullName} onChange={handleOnChange("fullName")} />
                <input type="email" placeholder="Email Address" value={email} onChange={handleOnChange("email")} />
                <input type="text" placeholder="Contact No" value={contactNo} onChange={handleOnChange("contactNo")} />
                <h2>Address</h2>
                <input type="text" placeholder="Line 1" value={line1} onChange={handleOnChange("line1")} />
                <input type="text" placeholder="Line 2" value={line2} onChange={handleOnChange("line2")} />
                <input type="text" placeholder="City" value={city} onChange={handleOnChange("city")} />
                <input type="text" placeholder="State" value={state} onChange={handleOnChange("state")} />
                <input type="text" placeholder="Country" value={country} onChange={handleOnChange("country")} />

                <Button color="primary" size="lg">Submit</Button>
            </header>
        </>
    )
}

export default GetStarted
