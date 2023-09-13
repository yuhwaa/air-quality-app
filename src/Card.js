const Card = ({ color, title, }) => {
    return (
        <div className={`card mb-4 ${color}`}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
    )
}

export default Card