import React from "react";
import Col from "../Col";
import "./style.css";
import linkedin from "../../assets/images/LinkedIn.png";
import github from "../../assets/images/github.png";
import zwhite from "../../assets/images/zack-white.jpeg";
import aesthetica from "../../assets/images/aestheticass.png";
import windowshop from "../../assets/images/aes_windowshop.png";
import tilly from "../../assets/images/White on Transparent.png";
import moodii from "../../assets/images/moodiiss.png";
import moodiimodal from "../../assets/images/moodiimodal.png";
import empdir from "../../assets/images/emp_dir.png";
import burger from "../../assets/images/eatdaburger.png";
import nosql from "../../assets/images/nosql.png";

function Section() {

    return (

        <div>

            <section className="py-5 align-items-center" id="home">
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
                                I recently decided to pivot from career in sales and pursue new challenges which will allow me to be more creative & hands-on with tech. I have high hopes of mastering computer programming and web development. Onward & Upward!
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
                                            <a class="nav-link works" id="backend-tab" data-toggle="tab" href="#backend" role="tab" aria-controls="backend" aria-selected="false">Back-End</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="tilly" role="tabpanel" aria-labelledby="tilly-tab">
                                            <br />
                                            <img src={tilly} alt="Tilly & Mint Logo" class="py-3" />
                                            <div class="uk-panel">
                                                <p>This is a website I've been working on for a client's new spa business opening soon.</p>
                                                <p>Code: Node.js, Express, Handlebars, Bootstrap & UIkit, Responsive Design, Form Validation</p>
                                                <a href="https://www.tillyandmint.com/">Visit Site</a>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="aesthetica" role="tabpanel" aria-labelledby="aesthetica-tab">
                                            <br />
                                            <div class="row mb-4">

                                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"></div>

                                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                                    <div class="card rounded shadow-sm border-0">
                                                        <div class="card-body p-5"><img src={aesthetica} alt="Aesthetica" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                                    <div class="card rounded shadow-sm border-0">
                                                        <div class="card-body p-4"><img src={windowshop} alt="Window Shop" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="uk-panel">
                                                <p>Aesthetica is a user friendly and interactive app that bridges fashion and community.</p>
                                                <p>Navigate the homepage to create a personal profile. Browse through the window shopping content and add your favorite images to your own virtual closet. Add, update and delete notes on each picture in your closet.</p>
                                                <p>Code: Node.js, Express, Handlebars, MySQL, Sequelize ORM, REST API</p>
                                                <a href="https://secure-ocean-28347.herokuapp.com/">Visit Site</a> | <a href="https://github.com/DianaLRS/Aesthetica">GitHub</a>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="moodii" role="tabpanel" aria-labelledby="moodii-tab">
                                            <br />
                                            <div class="row">

                                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"></div>

                                                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                                    <div class="card rounded shadow-sm border-0">
                                                        <div class="card-body p-3"><img src={moodii} alt="Moodii" class="w-100" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-3 col-md-6 mb-4">
                                                    <div class="card rounded shadow-sm border-0">
                                                        <div class="card-body p-1"><img src={moodiimodal} alt="Window Shop" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="uk-panel">
                                                <p>Moodii is a fun, simple web application that generates entertainment suggestions based on a user's mood.</p>
                                                <p>Choose from a variety of mood categories to render a list of films & TV shows, which also includes ratings, plots, and posters.</p>
                                                <p>Code: HTML/CSS/JavaScript, jQuery, API, AJAX, Bulma & Pure</p>
                                                <a href="https://fullstackzack.github.io/moodii/">Visit Site</a> | <a href="https://github.com/FullStackZack/moodii">GitHub</a>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">
                                            <div class="row">
                                                <Col size="lg-2"></Col>
                                                <Col size="lg-8">
                                                    <br />
                                                    <div class="uk-panel">
                                                        <img class="uk-align-left uk-align-right@m uk-margin-remove-adjacent" id="empdir" src={empdir} alt="Employee Directory" />
                                                        <p>This is an employee directory web application built with React. The app's UI is broken down into components, managing component state, and responding to user events.</p>
                                                        <p>Utilize the search bar by typing employee's first OR last name. Users can also sort employees by first or last name A-Z.</p>
                                                        <a href="https://radiant-citadel-58253.herokuapp.com/">Visit Site</a> | <a href="https://github.com/FullStackZack/react-employee-directory">GitHub</a>
                                                    </div>
                                                </Col>
                                                <Col size="lg-2">

                                                </Col>
                                            </div>

                                        </div>
                                        <div class="tab-pane fade" id="backend" role="tabpanel" aria-labelledby="backend-tab">
                                        <div class="row">
                                                <Col size="lg-6">
                                                    <br />
                                                    <div class="uk-panel">
                                                        <img class="uk-align-right uk-align-left@m uk-margin-remove-adjacent m-2" id="empdir" src={burger} alt="Eat Da Burger App" />
                                                        <p>Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.</p>
                                                        <p>Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. 
                                                            Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
                                                        </p>
                                                        <p>Code: MySQL, Handlebars, Node, Express, ORM; Model-view-controller framework</p>
                                                        <a href="https://stormy-plateau-35039.herokuapp.com/burgers">Visit Site</a> | <a href="https://github.com/FullStackZack/Eat-Da-Burger">GitHub</a>
                                                    </div>
                                                </Col>
                                                <Col size="lg-6">
                                                    <br />
                                                    <div class="uk-panel">
                                                        <img class="uk-align-right uk-align-right@m uk-margin-remove-adjacent m-2" id="nosql" src={nosql} alt="Workout Tracker" />
                                                        <p>The Workout Tracker is a NoSQL database application designed to help users track their workout progress & reach their fitness goals.</p>
                                                        <p>Users can log multiple exercises in a workout on a given day. They are also able to track the name, type, weight, sets, reps, and duration of each exercise.</p>
                                                        <p>Code: MongoDB, Moongoose, Node, Express</p>
                                                        <a href="https://immense-lowlands-48693.herokuapp.com/?id=5fa474d03be6d30017815c59">Visit Site</a> | <a href="https://github.com/FullStackZack/Nosql-Workout-Tracker">GitHub</a>
                                                    </div>
                                                </Col>
                                            </div>
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