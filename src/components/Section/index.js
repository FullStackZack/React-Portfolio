import React from "react";
import Col from "../Col";
import Row from "../Row";

function Section() {

    return (

        <div>

            <section class="py-5 align-items-center" id="home">
                <Row>
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </Row>
            </section>

            <section class="py-5 d-flex align-items-center" id="about">
                <Row>
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </Row>
            </section>

            <section class="py-5 d-flex align-items-center" id="services">
                <Row>
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </Row>
            </section>

            <section class="py-5 d-flex align-items-center" id="shop">
                <Row>
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </Row>
            </section>

            <section class="py-5 d-flex" id="contact-us">

            </section>
        </div>
    )
}

export default Section;