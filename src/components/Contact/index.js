import React from "react";
import "./style.css";
import Col from "../Col";

function Contact() {

    return (
        <div id="contact-container">

        <h1 id="message">Shoot me a message!</h1>


            <div class="row">
                <Col size="lg-3"></Col>
                <Col size="lg-6">

                <form id="my-form">
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email Address</label>
                    <br />
                    <input type="email" name="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com" required />
                    </div>
                    <label for="exampleFormControlInput1">Name</label>
                    <br />
                    <input class="form-control" type="text" name="name" />
                        <div class="form-group">
                            <label for="message">Message</label>
                            <br />
                    <input type="text" name="message" class="form-control" id="exampleFormControlTextarea1" rows="10" />
                    </div>
                    <button type="submit" class="btn btn-light" value="Send" id="my-form-button">Send</button>
            </form>

                </Col>
                <Col size="lg-3"></Col>
            </div>



        </div>
    )
}

export default Contact;