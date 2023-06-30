import React from 'react'

const Body = (props) => {
    console.log(props);
    return (
        <>
            <div className="body">
                { props.per.name }
            </div>
        </>
    )
}

export default Body