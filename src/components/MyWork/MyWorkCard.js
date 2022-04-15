const MyWorkCard = ({data}) => {
    const {title, description, img} = data;
    console.log();
    return (  
        <div style={{position:'relative'}}>
        <div className="myDIV card my-work-card my-work-card-style" style={{background:`url(${require(`../../assets/img/${img}`)}) no-repeat`,backgroundSize:'cover'}}>
        </div>
        <div className="hide my-work-card-style-title">{title}</div>
        </div>
    );
}
 
export default MyWorkCard;