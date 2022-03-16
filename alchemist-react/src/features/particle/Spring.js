import React, { useState, useEffect } from 'react';

const defaultHSpeed = 10;
const defaultVSpeed = 5;
const gravity = 0.2;
const frameRate = 25;
const lifeSpan = 2500;

export default function SpringParticle(props) {

    const generateSpeed = speed => speed / 2 - Math.random() * speed;

    const [position, setPosition] = useState({
        x: 0,
        y: -15,
        hVelocity: generateSpeed(props.hSpeed || defaultHSpeed),
        vVelocity: -(props.vSpeed || defaultVSpeed)
    });
    
    useEffect(() => {
        let moveIntervalID = setInterval(() => setPosition({
            ...position,
            vVelocity: position.vVelocity + gravity,
            x: position.x + position.hVelocity,
            y: position.y + position.vVelocity
        }), frameRate);

        return(() => clearInterval(moveIntervalID));
    }, [position]);

    useEffect(() => {
        let destroyTimeoutID = setTimeout(() => props.destroy(), lifeSpan);
        return(() => clearTimeout(destroyTimeoutID));
    }, [])

    return (
        <section className="position-relative pe-none">
            <span className="position-absolute translate-middle"
                    style={{left: `${position.x}px`, top: `${position.y}px`, whiteSpace: 'nowrap'}}>
                {props.children}
            </span>
        </section>
    );
}
