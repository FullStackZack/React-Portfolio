import React from "react";
import "./style.css";

function Nav() {

    return (
        <header class="header">
        <nav class="navbar navbar-light navbar-expand-lg fixed-top py-3">
            <div class="container">
                <h1>Zack White</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link scroll-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll-link" href="#services">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll-link" href="#shop">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link scroll-link" href="#contact-us">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default Nav;