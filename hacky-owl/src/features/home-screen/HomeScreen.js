import React from "react";
import './HomeScreen.css'
import { Link } from 'react-router-dom'

import {HackyOwlButton} from './../../component/Custom-Buttons'

import { useDispatch } from "react-redux";
import {UPDATE_DISPLAY_SCREEN} from "./../nav-bar/NavBarslice"

// Import particle related components
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


// Reference:
// https://www.npmjs.com/package/react-tsparticles
// https://github.com/matteobruni/tsparticles
// https://github.com/VincentGarreau/particles.js/
// https://vincentgarreau.com/particles.js/#snow
function HomeScreen() {

    const dispatch = useDispatch()

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const onGettingStarted = useCallback(() => {
        dispatch(UPDATE_DISPLAY_SCREEN("challenges"))
    })

    return (
        <div className="HomeScreen">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            //value: "#0d47a1"
                            value:"rgb(25,118,210)",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 300,
                                duration: 1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="LandingInfo">

                <strong>CODING MADE FUN</strong>
                    <Link to={'/challenges'} className="GetStarted">
                        <HackyOwlButton onClick={onGettingStarted}/>
                        <strong>GET STARTED</strong>
                    </Link>
            </div>


        </div>

    );


}

export default HomeScreen