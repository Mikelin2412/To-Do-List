import React from 'react';
import "../styles/ToDoFormStyle.css";

function ToDoFormComponent(props) {
    return (
        <div className="to-do-form">
            <form onSubmit={props.handleSubmit}>
                <div className="to-do-form__task-and-description">
                <input
                    className="to-do-form__input"
                    name="description"
                    placeholder="To Do:"
                    value={props.info.description || ""}
                    onChange={props.handleChange}
                />
                {(props.info.description) ? (
                            <textarea
                                className="to-do-form__textarea"
                                name="detailedDescription"
                                placeholder='Add description'
                                value={(props.info.detailedDescription !== ' ') ? props.info.detailedDescription : ""}
                                onChange={props.handleChange}
                            />
                        ) : null
                }
                </div>
                <button
                    className="to-do-form__button"
                    type="submit"
                >Create</button>
            </form>
        </div>
    );
}

export default ToDoFormComponent;