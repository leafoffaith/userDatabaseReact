import './list.css';
import Card from './Card';
import Item from './Item';

export default function List(props) {

    return (
        <Card>
            <div className="list">
                {props.users.map((e) => { return <Item key={e.id} name={e.name} age={e.age} /> })}
            </div>
        </Card>
    )
}