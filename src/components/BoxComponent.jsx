import React, { useState } from 'react';

const BoxComponent = ({ addNewBox }) => {

    const [box, setBox] = useState({
        height: "100px",
        width: "100px",
        backgroundColor: ""
    })

    const handlecolor = (e) => {
        e.preventDefault()
        addNewBox(box);
    }

    const onChange = (e) => {
        setBox({
            ...box,
            backgroundColor: e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handlecolor}>
                <label htmlFor="">Color</label>
                <input type="text" onChange={onChange} value={box.backgroundColor} />
                <input type="submit" value="Create Box" />
            </form>
        </div>
    )

}

export default BoxComponent;