import Image from '../../assets/img/avatar.png';
import ImageAvatar from '../../assets/img/avatar1.png';
const AboutMe = () => {
    return (  
        <>
        <div className='row'>
            <div className='col-lg-12 title-section'>
                <h2>⚡ Sobre mí.</h2>
            </div>
        </div>
        <div className='row'>
            <div className='col-lg-4'/>
            <div className='col-lg-4 about-me-avatar-full'>
                <img src={ImageAvatar} />
            </div>
            <div className='col-lg-4'/>
        </div>

        <div className="row about-me">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
                <p className="about-me-content">
                ¡Hey Soy Hugo, Desde muy joven me empecé a interesar por el diseño gráfico y desde entonces me ha apasionado.
                <br/>
                <br/>
                Realmente me gustó construir cosas usando herramientas sin código y a partir de ahí, exploré cómo codificarme a mí mismo, avancé rápidamente hasta el día de hoy, hago programación en varios lenguajes y tecnologías.
                <br/>
                <br/>
                Estoy interesado por encontrar soluciones por medio de la programación como medio de mi creatividad.
                <br/>
                <br/>
                Cuando no estoy programando,  veo series en Netflix,  salgo a correr, tomar fotos o jugar futbol ⚽⚽
                </p>
            </div>
            <div className="col-lg-4" style={{textAlign:"center"}}>
                <img className="about-me-avatar" src={Image} />
            </div>
            <div className="col-lg-2"></div>
        </div>
        </>
    );
}

export default AboutMe;