'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText)


export default AnimatedCopy = ({children, colorinitial="#dddddd", colorAccent="zoroRed", colorFinal ='#000000'}) => {
    const containerRef = useRef(null);
    

    if(React.Children.count(children) === 1){
        return React.cloneElement(children, {ref: containerRef});
    }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
        {children}
    </div>
  )
}
