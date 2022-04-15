import MyWorkGrid from "./MyWorkGrid";

const MyWork = () => {
    return ( 
        <div className="my-work">
            <div className='row'>
                <div className='col-lg-12 title-section'>
                    <h2>💡 Mi trabajo Creativo.</h2>
                    Aquí algunos de los proyectos en los que he trabajado.
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"/>
                <div className="col-md-8">
                    <MyWorkGrid/>
                </div>
                <div className="col-md-2"/>
            </div>
        </div>
    );
}
export default MyWork;