'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ReactLenis from "lenis/react";

import "./index.css"

export default function exp(){
    const lenisRef = useRef();

    return (
        <>
            <ReactLenis root options={{autoRaf: false}} ref={lenisRef}/>
            <section className="hero">
                <img src="/assets/home/Brand.png" alt="" />
            </section>
            <section className="about">
                <div className="header">
                    <h1>A new Chapter of Digital Experience</h1>
                </div>
                <div className="copy">
                    <p>
                        In an era of Artificail Intelligence and speed, innovation reshapes the foundation
                        of modern social presence. Every Component is built with intent, every system designed to perform at scale. This is more than
                        a website or design. It is the architecture of the future. 
                    </p>
                </div>
            </section>

            <section className="banner-img">
                <img src="/assets/home/Build.png" alt="" />
            </section>
            <section className="services">
                <div className="service">
                    <div className="col">
                        <h3>A new Chapter of Digital Experience</h3>
                        <p>
                        In an era of Artificail Intelligence and speed, innovation reshapes the foundation
                        of modern social presence. Every Component is built with intent, every system designed to perform at scale. This is more than
                        a website or design. It is the architecture of the future. 
                    </p>
                    </div>
                    <div className="col">
                        <img src="/assets/home/Design.png" alt="" />
                    </div>

                </div>
            </section>

            <section className="services">
                <div className="service">
                    <div className="col">
                        <img src="/assets/home/Design.png" alt="" />
                    </div>
                                        <div className="col">
                        <h3>A new Chapter of Digital Experience</h3>
                        <p>
                        In an era of Artificail Intelligence and speed, innovation reshapes the foundation
                        of modern social presence. Every Component is built with intent, every system designed to perform at scale. This is more than
                        a website or design. It is the architecture of the future. 
                    </p>
                    </div>

                </div>
            </section>

            <section className="outro">
                <h3>Outro is Here</h3>
            </section>

        </>
    );
}