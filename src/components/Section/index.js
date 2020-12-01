import React from "react";
import Col from "../Col";
import linkedin from "./LinkedIn.png";
import github from "./github.png";
import zwhite from "./zack-white.jpeg";

function Section() {

    return (

        <div>

            <section class="py-5 align-items-center" id="home">
                <div class="row">
                    <Col size="lg-4"></Col>
                    <Col size="lg-4">
                        <div class="jumbotron">
                            <h1 class="display-4">Hi, I'm Zack.</h1>
                            <p class="lead">Full Stack Developer / Web Designer / Innovator & Creator</p>
                            <p class="welcome">Take a look around & feel free to connect with me.</p>
                            <a href="https://www.linkedin.com/in/zack-white-420a21b5/"><img src={linkedin} alt="LinkedIn" class="social" /></a>
                            <a href="https://github.com/FullStackZack"><img src={github} alt="GitHub" class="social" /></a>

                        </div>
                    </Col>
                    <Col size="lg-4"></Col>
                </div>
            </section>

            <section class="py-3 d-flex align-items-center" id="about">

                <Col size="lg-1"></Col>


                <Col size="lg-6">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="bio">
                            <h1 class="display-4" id="about_me">About Me</h1>
                            <img src={zwhite} alt="Zack by the beach" id="bio_pic" />
                            <p class="first-line">
                                I'm a full-stack web developer living in Austin, TX.
                        </p>
                            <p>
                                I'm currently enrolled at The Coding Boot Camp at UT Austin for a 24-week Full Stack Flex program designed to provide students with the knowledge & skills to build dynamic end-to-end web applications. I'm set to graduate in December 2020. Hook 'Em!
                        </p>
                            <p>
                                After completing my undergrad studies at The Univeristy of Mississippi in 2015, I've spent most of my career selling cloud-based software solutions - primarily within the restaurant industry.
                        </p>
                            <p>
                                I have recently decided to pivot from career in sales and pursue new challenges that will allow me to be more creative & hands-on with tech. I have high hopes of mastering computer programming and web development.
                        </p>
                            <p>
                                Onward & Upward!
                        </p>
                        </div>
                    </div>
                </Col>

                <Col size="lg-4">
                    <div>

                        <div class="uk-card uk-card-default uk-card-body">
                            <h1 class="display-4">Skills</h1>

                            <table class="uk-table">

                                <tbody>
                                    <tr>
                                        <td>HTML / CSS / JavaScript</td>

                                    </tr>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <tr>
                                        <td>jQuery / React.js / Handlebars / Responsive Design</td>
                                    </tr>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <tr>
                                        <td>Node.js / Express / MySQL / MongoDB</td>
                                    </tr>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <tr>
                                        <td>Heroku / GitHub Pages / Git</td>
                                    </tr>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>

                <Col size="lg-1"></Col>



            </section>


            <section class="py-5 d-flex align-items-center" id="projects">
                <div class="row">
                
                </div>
            </section>

            <section class="py-5 d-flex" id="contact-us">

            </section>
        </div>
    )
}

export default Section;