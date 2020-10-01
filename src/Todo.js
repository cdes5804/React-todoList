import React, {Fragment, useState, useEffect} from 'react';
import TodoItem from './TodoItem'
import TodoStat from './TodoStat'

function Todo() {

    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    const [mode, setMode] = useState('all');

    useEffect(() => {
        const storedItems = localStorage.getItem('Items');
        if (storedItems !== null) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        const itemsString = JSON.stringify(items);
        localStorage.setItem('Items', itemsString);
    }, [items])

    let getRandomId = () => Math.random()

    let addItem = (e) => {
        e.preventDefault();
        if (item === '')
            return;
        const newItem = {
            id: getRandomId(),
            text: item,
            completed: false
        }
        setItems(prevItems => [...prevItems, newItem]);
        setItem('');
    }

    let handleChange = (e) => {
        const {value} = e.target;
        setItem(value);
    }

    let toggleComplete = (id) => {
        const newItems = items.map(x => {
            if (x.id === id) {
                x.completed = !x.completed;
            }
            return x;
        })
        setItems(newItems)
    }

    let delItem = (id, e) => {
        e.stopPropagation();
        const newItems = items.filter(x => x.id !== id);
        setItems(newItems);
    }

    let changeMode = (e) => {
        setMode(e.target.name);
    }

    let delCurrent = () => {
        console.log('here');
        let newItems;
        if (mode === 'all')
            newItems = [];
        else if (mode === 'completed')
            newItems = items.filter(x => x.completed === false);
        else if (mode === 'active')
            newItems = items.filter(x => x.completed);
        setItems(newItems);
    }

    return (
        <Fragment>
            <form onSubmit={addItem} className="form">
                <input
                    type="text"
                    name="item"
                    value={item}
                    placeholder="Type here to add item"
                    className="input"
                    onChange={handleChange}
                />
                <button className="add-btn">Add</button>
            </form>
            <TodoItem items={items} toggleComplete={toggleComplete} delItem={delItem} mode={mode}/>
            <TodoStat items={items} changeMode={changeMode} delCurrent={delCurrent} mode={mode}/>
        </Fragment>
    );
}

export default Todo;
