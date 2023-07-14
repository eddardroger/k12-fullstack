import React from 'react'

const ClearAll = (props) => {
    return (
        <>
            <h4>Bạn có { props.list.length } tasks đang chờ</h4>
            <button>Xoá hết</button>
        </>
    )
}

export default ClearAll