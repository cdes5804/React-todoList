import React from 'react';

function TodoItem(props) {
    let items = props.items;
    if (props.mode === 'active')
        items = props.items.filter(x => x.completed === false);
    else if (props.mode === 'completed')
        items = props.items.filter(x => x.completed);
    items = items.map(x =>
        <li className={x.completed ? "list-item complete": "list-item incomplete"}
            key={x.id}
            onClick={props.toggleComplete.bind(this, x.id)}
        >
        <span className={x.completed ? "item-text text-complete": "item-text"}>{x.text}</span>
        <div className="btn-container"><ion-icon name="close-circle-outline" onClick={props.delItem.bind(this, x.id)}>X</ion-icon></div>
        </li>
    )
    return (
        <ul className="list">
            {items}
        </ul>
    );
}

export default TodoItem;
