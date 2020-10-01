import React from 'react';

function TodoStat(props) {
    if (!props.items.length)
        return null;
    const itemCnt = props.items.filter(x => x.completed === false).length;
    const allBackground = props.mode === 'all' ? 'btn-active': '';
    const activeBackground = props.mode === 'active' ? 'btn-active': '';
    const completedBackground = props.mode === 'completed' ? 'btn-active': '';

    return (
        <div className="stat-container">
            <div className="item-cnt">{itemCnt} left</div>
            <div className="btns-container">
                <button className={`stat-btn ${allBackground}`} onClick={props.changeMode} name="all">All</button>
                <button className={`stat-btn ${activeBackground}`} onClick={props.changeMode} name="active">Active</button>
                <button className={`stat-btn ${completedBackground}`} onClick={props.changeMode} name="completed">Completed</button>
            </div>
            <button className="del-completed-btn stat-btn" onClick={props.delCurrent}>Clear Current</button>
        </div>
    )
}

export default TodoStat;
