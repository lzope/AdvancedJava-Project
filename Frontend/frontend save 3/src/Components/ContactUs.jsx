import React from "react";
import { Navigationbar } from "./Navigationbar";

export function ContactUs() {
    return (
        <>
        <Navigationbar></Navigationbar>
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h1> Contact Us</h1>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h4 className="float-end">
                                Home / About Us
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <input type="text" ></input>
                                        <textarea rows="3" className="force-control" placeholder="Type your message..."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button className="btn btn-primary shadow w-100" >Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        xxxxx,Nikhil park 3,India
                                    </p>
                                    <p>
                                        phone : +91 xxxxxxxxxx
                                    </p>
                                    <p>
                                        Email: email@gamil.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
        </>
    );
}