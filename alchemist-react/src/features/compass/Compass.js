import React, { useState } from 'react';
import SpringParticle from '../particle/Spring';
import { v4 as idv4 } from 'uuid';

export default function Compass() {

    const [particles, setParticles] = useState([]);

    const generateParticle = () => {        
        setParticles([
            ...particles, { 
                id: idv4()
            }
        ]);
    };

    const destroyParticle = id => (
        setParticles(prevParticles => prevParticles.filter(particle => particle.id !== id))
    )

    return(
        <section>
            <button className="btn btn-primary"
                    onClick={generateParticle}>
                Explore
                {
                    particles.map(particle => (
                        <SpringParticle key={particle.id}
                                        destroy={() => destroyParticle(particle.id)}>
                            Doing an explore...
                        </SpringParticle>
                    ))
                }
            </button>
        </section>
    );
}