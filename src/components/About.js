import React from "react";

function About() {
    return(
        <aside>
            <img src={image}
             placeholder="https://via.placeholder.com/215"
               alt="blog logo">
               </img>
            <p>{about}</p>
        </aside>
    )
}

export default About;