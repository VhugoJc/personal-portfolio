import { Fragment, useEffect, useState } from "react";
import {dataTechnologies} from './MyWork/dataTechnologies';

const Modal = ({ handleClose,data }) => {
    const {title, gif,largeDescription,technologies, url} = data;
    const [techData, setTechData] = useState(null)


    useEffect(()=>{
        if(technologies.length>0 && techData===null){
            let auxArray = [];
            technologies.map(tech=>{
                let data = dataTechnologies.filter(item => item.id === tech);
                auxArray.push(data[0]);
            })
            console.log(auxArray);
            setTechData(auxArray);
        }
    },[]);


    return (
        <div className="modal display-block">
            <section className="modal-main card my-work-card">
                <a onClick={()=>handleClose(null)} className=" modal-close">
                    <span className="iconify" data-icon="fe:close"></span>
                </a>
                <p className='modal-title'>{title}</p>
                <div className="row modal-container">
                    <div className="col-md-6 modal-container-gif">
                        <img className='modal-gif' src={require(`../assets/img/${gif}`)}/>
                    </div>
                    <div className="col-md-6">
                        <p style={{fontWeight:'bold'}}>Descripción:</p>
                        <p>{largeDescription}</p>
                        <p style={{fontWeight:'bold'}}>Tecnologías:</p>
                        {
                            techData!==null
                            ? (
                                techData.map(item=>{
                                    return <Fragment key={item.id}><span  className={`badge ${item.style}`}><span className="iconify" data-icon={`${item.icon}`}></span>&nbsp;{item.name}</span>&nbsp;</Fragment>;
                                })
                            )
                            : null
                        }
                    </div>
                </div>
                {
                    url
                    ? (
                        <div className="modal-btn">
                            <a className="btn btn-primary" style={{width:'50%'}} href={url} target='_blank' rel="noopener noreferrer" role="button">Ver Más</a>
                        </div>
                    )
                    : null
                }
            </section>
        </div>
    );
};

export default Modal;
