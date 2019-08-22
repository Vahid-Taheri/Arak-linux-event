import React from 'react'


const Timeline = (props) => (
    <section className="timeline container">
        <h2>{props.data.Title}</h2>
        <div className="items">
            {props.data.Items.map(item =>
                <div key={props.data.Items.indexOf(item)} className="item"
                     data-time={item.Time}>{item.Title}</div>
            )}
        </div>
    </section>
);
export default Timeline