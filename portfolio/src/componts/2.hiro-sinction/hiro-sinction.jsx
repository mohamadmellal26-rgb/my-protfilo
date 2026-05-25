import "./hiro-sinction.css";
import React from 'react';
export default function HiroSinction() {
    const iconImg = {
        ic1: "/twitter.png",
        ic2: "/linkedin.png",
        ic3: "/github.png",
        ic4: "/instagram.png"
    }
    const developerImage = "/developer-using-laptop-illustration-svg-download-png-11934876.webp";
    return (
       <div className="hiro-contener">
    <div>
        <div className="my-img-profille">
            <img src="/png-profile-icon-face-portrait-circle_53876-814410.webp" height="100vh" alt="" />
            <img src="correct.png" height="20vh" alt="" />
        </div>
        <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
            Doloremque maxime quae velit et quibusdam provident <br /> 
            temporibus autem repudiandae unde fugit.
        </h3>
        <div className="icons-linck">
            <img src={iconImg.ic1} alt="" />
            <img src={iconImg.ic2} alt="" />
            <img src={iconImg.ic3} alt="" />
            <img src={iconImg.ic4} alt="" />
        </div>
    </div>
    <div>
        <img src={developerImage} height="300vh" alt="developer" />
    </div>
</div>
    );
}