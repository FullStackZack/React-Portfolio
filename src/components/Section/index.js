import React from "react";
import Col from "../Col";

function Section() {

    return (

        <div>

            <section class="py-5 align-items-center" id="home">
            <div class="row">
                    <Col size="lg-4"></Col>
                    <Col size="lg-4">
                        <div class="jumbotron">
                            <h1 class="display-4">Hi, I'm Zack.</h1>
                            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        </div>
                    </Col>
                    <Col size="lg-4"></Col>
                </div>
            </section>

            <section class="py-5 d-flex align-items-center" id="about">
           
            </section>

            <section class="py-5 d-flex align-items-center" id="services">
                <div class="row">
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </div>
            </section>

            <section class="py-5 d-flex align-items-center" id="shop">
                <div class="row">
                    <Col size="lg-2"></Col>
                    <Col size="lg-8">

                    </Col>
                    <Col size="lg-2"></Col>
                </div>
            </section>

            <section class="py-5 d-flex" id="contact-us">

            </section>
        </div>
    )
}

export default Section;