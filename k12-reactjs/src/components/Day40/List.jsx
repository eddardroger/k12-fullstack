import React from 'react'
import './List.css'

const List = () => {
    return (
        <>
            <div className="list">
                <div className="list-element_child">
                    <p>1. Học bài</p>
                    <span>Delete</span>
                </div>
                <div className="list-element_child">
                    <p>2. Xem TV</p>
                    <span>Delete</span>
                </div>
                <div className="list-element_child">
                    <p>3. Chơi game</p>
                    <span>Delete</span>
                </div>
            </div>
        </>
    )
}

export default List