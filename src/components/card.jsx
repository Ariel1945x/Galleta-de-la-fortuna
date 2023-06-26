const Card = (props) => {

    const {data} = props

    return (
        <article className="container">
            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
            
            <div className="suerte">
                <div className="texto">
                    <p className="texto-suerte">{data.phrase} <i class='bx bxs-quote-alt-right bx-md'></i></p>
                </div>
            </div>

            <div className="fuente">
                <p className="texto-fuente">Fuente: {data.author}</p>
            </div>
        </article>
    )
}

export default Card