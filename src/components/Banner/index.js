import React from "react";
import VideoBackground from '../../assets/video/video.mp4';

const Banner = () =>{
    return(
        <div className="banner">
        <div className="banner-video__dark">
            <div className="row">
                <div className="col-md-2" />
                    <div className='col-md-8 banner-video__dark-container'>
                        <h2 className="banner-video__dark-subtitle">Hola! 👋, Soy</h2>
                        <h1 className="banner-video__dark-title">Victor Hugo Jimenez</h1>
                        <h3>Estudiante de TI. <span className="banner-video__dark-description">Desarrollador autodidácta con interes en aplicaciones web.</span></h3>
                        
                        <div className="banner-video__dark-activities">
                            <p>🚀 Explorando y mejorando cada día.</p>
                            <p>☕ Fan del café.</p>
                            <p>🎓 Estudiante de la universidad politécnica de San Luis Potosí.</p>
                        </div>

                        <div className="banner-video__dark-btn">
                            <a  className="btn btn-secondary banner-video__dark-activities-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/VhugoJc" role="button"><span className="iconify banner-icon" data-icon="akar-icons:github-fill"></span> &nbsp;Github</a>
                            <a  className="btn btn-secondary banner-video__dark-activities-btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/victorhugo-jc/" role="button"><span className="iconify banner-icon" data-icon="akar-icons:linkedin-box-fill"></span> &nbsp;Linkedin</a>
                            <a  className="btn btn-secondary banner-video__dark-activities-btn" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=524448500377&text=Hola%20Hugo%E2%9C%8C%EF%B8%8F,%20me%20comunico%20contigo%20para%20" role="button"><span className="iconify banner-icon" data-icon="akar-icons:whatsapp-fill"></span>&nbsp;Whatsapp</a>
                        </div>
                    </div>
                <div className="col-md-2" />
            </div>
        </div>
        <div className="banner-video">
            <video className="banner-video__source" muted loop autoPlay playsInline={true} disablePictureInPicture={true}>
                <source src={VideoBackground} type="video/mp4"/>
        </video>
        </div>
    </div>
    );
}


export default Banner;