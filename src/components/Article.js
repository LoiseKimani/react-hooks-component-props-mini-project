import React from "react";

function Article() {
return(
    <article>
        <h3>{title}</h3>
        <small>{date}{default value}</small>
        <p>{preview}</p>
    </article>
)
}

export default Article;