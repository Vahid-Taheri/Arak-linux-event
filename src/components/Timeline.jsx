import React from 'react'


const Timeline = (props) => (
    <section className="timeline container">
        <h2 id="section-title">{props.data.Title}</h2>
        <div className="items">
            {props.data.Items.map(item =>
                <div key={props.data.Items.indexOf(item)} className="item"
                     data-time={item.Time}>
                     <span className="title">{item.Title}</span>
                     <span className="by"> توسط </span>
                     <span className="publisher">{item.Publisher}</span>
                     </div>
            )}
        </div>
    </section>
);
export default Timeline