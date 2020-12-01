import React from "react";
import Col from "../Col";
import linkedin from "./LinkedIn.png";
import github from "./github.png";
import zwhite from "./zack-white.jpeg";
import tilly from "./White on Black.png";

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
                            <p class="welcome">Let's Connect!</p>
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
                    <div class="jumbotron jumbotron-fluid" id="about-z">
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
                                I have recently decided to pivot from career in sales and pursue new challenges that will allow me to be more creative & hands-on with tech. I have high hopes of mastering computer programming and web development. Onward & Upward!
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
                                        <div class="progress-bar progress-bar-striped w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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


            <section id="projects">
                <div class="row">

                    <Col size="lg-1"></Col>

                    <Col size="lg-10">

                        <div class="jumbotron" id="my-projects">
                            <h1 class="display-4" id="project">Portfolio</h1>
                            <div class="row">
                                <Col size="lg-1"></Col>

                                <Col size="lg-10">

                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active works" id="tilly-tab" data-toggle="tab" href="#tilly" role="tab" aria-controls="home" aria-selected="true">Tilly & Mint</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link works" id="aesthetica-tab" data-toggle="tab" href="#aesthetica" role="tab" aria-controls="aesthetica" aria-selected="false">Aesthetica</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link works" id="moodii-tab" data-toggle="tab" href="#moodii" role="tab" aria-controls="moodii" aria-selected="false">Moodii</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link works" id="react-tab" data-toggle="tab" href="#react" role="tab" aria-controls="react" aria-selected="false">React</a>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link works" id="handlebars-tab" data-toggle="tab" href="#handlebars" role="tab" aria-controls="handlebars" aria-selected="false">Handlebars</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="tilly" role="tabpanel" aria-labelledby="tilly-tab">
                                        <br />
                                            <div class="uk-panel">
                                                <img class="uk-align-left uk-margin-remove-adjacent project_pic" src={tilly} width="225" height="150" alt="Tilly & Mint" />
                                                <p>Aesthetica is a user friendly and interactive app that bridges fashion and community.</p>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="aesthetica" role="tabpanel" aria-labelledby="aesthetica-tab">
                                            <br />
                                            <div class="uk-panel">
                                                <img class="uk-align-right uk-margin-remove-adjacent" src="images/light.jpg" width="225" height="150" alt="Aesthetica" />
                                                <p>Aesthetica is a user friendly and interactive app that bridges fashion and community.</p>
                                                <p>Navigate the homepage to create a personal profile. Browse through the window shopping content and add your favorite images to your own virtual closet. Add, update and delete notes on each picture in your closet.</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="moodii" role="tabpanel" aria-labelledby="moodii-tab">

                                        </div>
                                        <div class="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">

                                        </div>
                                        <div class="tab-pane fade" id="handlebars" role="tabpanel" aria-labelledby="handlebars-tab">

                                        </div>
                                    </div>

                                </Col>

                                <Col size="lg-1"></Col>
                            </div>

                        </div>

                    </Col>

                    <Col size="lg-1"></Col>



                </div>
            </section>

        </div>
    )
}

export default Section;