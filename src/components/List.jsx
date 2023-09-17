import React from 'react';
import "../styles/ListOfTasks.css";

function List({ allValues, handleClick, handleCheckOfTask, handleCheckOfDescription, handleAllTasksButton, handleCompletedTasksButton, handleUncompletedTasksButton }) {
    return (
        <div className="list-of-tasks-container">
            <div className="choose-tasks-buttons">
                <button
                    onClick={handleAllTasksButton} >All Tasks</button>
                <button
                    onClick={handleCompletedTasksButton} >Only completed</button>
                <button
                    onClick={handleUncompletedTasksButton} >Only uncompleted</button>
            </div>
            <ul className="list-of-tasks-container__ul">
                {allValues.map(({description, detailedDescription, id, background, textDecoration, displayOfDescription}) => {
                    const divStyles = { backgroundColor: background };
                    const pStyles = { textDecoration: textDecoration };
                    const descriptionStyles = { display: displayOfDescription };
                    let check = false;
                    if (background === 'rgba(239, 228, 255, 0.85)') {
                        check = true;
                    }
                    return (
                        <li className="list-of-tasks-container__ul__li" key={id}>
                            <div className="task-to-do" style={ divStyles }>
                                <div className="task-to-do__container">
                                    <input
                                        className="task-check"
                                        type="checkbox"
                                        onChange={handleCheckOfTask}
                                        id={id}
                                        checked={check} />
                                    <div className="task-to-do__info">
                                        <p style={ pStyles }>{description}</p>
                                        <button
                                            onClick={handleClick}
                                            id={id}
                                        >Delete</button>
                                    </div>
                                </div>
                                {(!detailedDescription) ? null : (
                                    <div className="task-to-do__description">
                                        <label className="description-check">
                                            <input 
                                                type="checkbox"
                                                onChange={handleCheckOfDescription}
                                                id={id} />
                                            <div className="highload2"></div>
                                        </label>
                                        <p style={ descriptionStyles }>{detailedDescription}</p>
                                    </div>
                                )}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default List;