import React from 'react';

export default function Section(props){
    return(
        <section>
            
            <h2 className="section__heading container">{props.title}</h2>
            {props.children}
            
        </section>
    )
}