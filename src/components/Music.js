const Music = () => {
    return ( 
        <>
        <div className='row'>
            <div className='col-lg-12 title-section'>
                <h2>🎵 Música.</h2>
                La musica que me gusta escuchar cuando programo
            </div>
        </div>
        <div className="row music">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/3WY92V9U7e58wLWYA0OlZJ?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className="col-md-2"></div>
        </div>
        </>
    );
}
export default Music;