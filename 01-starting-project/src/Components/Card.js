import './Card.css';

export default function Card(props) {
    
    const name = "card " + props.className;

    return <div className={name}>{props.children}</div>

}

