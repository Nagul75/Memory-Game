import "../styles/Card.css"

export default function Card({children}) {
    return (
        <a href="#" className="card-link">
        <div className="card-container">
        {children}
        </div>
        </a>
    )
}