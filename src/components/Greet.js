import React from 'react';
export const Greet =({match})=>(
    <div>
        <h2>Welcome {match.params.username}! Hope you found the website useful</h2>
    </div>
)