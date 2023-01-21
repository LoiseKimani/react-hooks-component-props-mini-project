import React from "react";

function About({image="https://via.placeholder.com/215", about}) {
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

// import React from "react";

// function About() {
//     return(
//         <aside>
//             <img src={image}
//              placeholder="https://via.placeholder.com/215"
//                alt="blog logo">
//                </img>
//             <p>{about}</p>
//         </aside>
//     )
// }

// export default About;