import React from 'react';

function TodoStat(props) {
    if (!props.items.length)
        return null;
    const itemCnt = props.items.filter(x => x.completed === false).length;
    return (
        <div className="stat-container">
            <div className="item-cnt">{itemCnt} left</div>
            <div className="btns-container">
                <button className="stat-btn" onClick={props.changeMode} name="all">All</button>
                <button className="stat-btn" onClick={props.changeMode} name="active">Active</button>
                <button className="stat-btn" onClick={props.changeMode} name="completed">Completed</button>
            </div>
            <button className="del-completed-btn stat-btn" onClick={props.delComplete}>Clear Completed</button>
        </div>
    )
}

export default TodoStat;
