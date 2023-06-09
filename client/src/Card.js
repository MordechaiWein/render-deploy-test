import React from "react";

function Card({user}) {
    return (
        <div>
            <h1>{user.name} - {user.age}</h1>
        </div>
    )
}

export default Card