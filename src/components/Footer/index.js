import React from "react";
import Col from "../Col";

function Footer() {

    return (
        <div class="container py-5">
            <div class="row">
                <Col size="lg-2">
                    <p class="font-italic text-muted"></p>
                    <ul class="list-inline mt-4">

                    </ul>
                </Col>

                <Col size="lg-6">
                    <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>

                </Col>
                <Col size="lg-4">
                    <h6 class="text-uppercase font-weight-bold mb-4">Where To Find Us</h6>
                </Col>
            </div>
        </div>
    )
}

export default Footer;