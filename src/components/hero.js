import React from "react"
import "../styles/hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src="https://avatars.githubusercontent.com/u/28261278?v=4" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by XXXX.<br />
                    Front Engineer at Hoge.Inc. Love JavaScript.
                </p>
            </div>
        </div>
    )
}
