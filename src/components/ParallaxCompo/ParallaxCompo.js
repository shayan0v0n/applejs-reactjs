import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Image } from 'react-bootstrap'
import './ParallaxCompo.scss'

const ParallaxCompo = props => {
    return (
        <Parallax bgImage={props.url} bgImageAlt="Apple" strength={500}>
            <div className="custom-bg"></div>
        </Parallax>
    )
}

export default ParallaxCompo;