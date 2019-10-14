import React from 'react'


const ColoredBlock = (props) => (
    <div className={"block green-block " +(props.Class||"")} style={{backgroundColor: props.data.color}}>
        {props.data.Text}
    </div>
);
export default ColoredBlock
