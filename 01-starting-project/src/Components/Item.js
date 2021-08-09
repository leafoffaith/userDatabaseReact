import './Item.css'

export default function Item(props) {
    return (
        <div className="item">{props.name} : {props.age}</div>
    )
}