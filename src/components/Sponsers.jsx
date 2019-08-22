import React from 'react'


const Sponsers = (props) => (
    <section className="Sponcers container">
        <h2>{props.data.Title}</h2>
        <div className="items clearfix">
            {props.data.Items.map(item =>
                <Sponser key={props.data.Items.indexOf(item)} {...item} />
            )}
        </div>
    </section>
);
export default Sponsers


export const Sponser = (props) => (
    <div className="item clearfix col-md-2 col-sm-3 col-4" style={{display: "inline-block"}}>
        <img src={require(`../images/Sponcers/${props.LatinName}.png`)} alt={props.Name}
             data-toggle="tooltip" data-placement="top" title={props.Name}/>
    </div>
);