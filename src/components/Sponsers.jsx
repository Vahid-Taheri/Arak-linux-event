import React from 'react'
import ReactTooltip from 'react-tooltip'

const Sponsers = (props) => (
    <section className="Sponcers">
        <h2 id="section-title">{props.data.Title}</h2>
        <div className="items clearfix container">
            {props.data.Items.map(item =>
                <Sponser key={props.data.Items.indexOf(item)} {...item} />
            )}
        </div>
    </section>
);
export default Sponsers


export const Sponser = (props) => (
    <a href={props.Link} rel="nofollow" className="item clearfix">
        <img src={require(`../images/Sponcers/${props.LatinName}.png`)} alt={props.Name}
            data-tip={props.Name} title={props.Name} />
        <ReactTooltip effect="solid" />
    </a>
);