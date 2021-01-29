import React from 'react';

const Rout = (props) => {
    console.log(props)
    let p = props.match.params.test_params;
    return (
        <div>
            <h2>Rout</h2>
            <p>{p}</p>
        </div>
    );
}

export default Rout;