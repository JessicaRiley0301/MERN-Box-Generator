import React from 'react';

const DisplayComponent = (props) => {
    
    // const { allBoxes } = props;

    return (
        <div>
            { props.allBoxes.map( (box, idx)  => {
                return (
                    <div key={idx} style={{backgroundColor: box.backgroundColor, width: box.width, height: box.height, display: 'inline-block'}}>{box.backgroundColor} </div>
                ) 
                })
            }
        </div> 
    )
        }

export default DisplayComponent;