import React from 'react'

const ConferanceRegitster = (props) => (
    <section className="ConferanceRegitster container">
        <h2 id="section-title">{props.data.Title}</h2>
        <p className="description">{props.data.Desc}</p>    
    </section>
);
export default ConferanceRegitster