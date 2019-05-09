// create a header that will be passed a name prop

// the header should be a stateless functional component

// it should use a template literal to concatenate the name prop passed in with the sting "'s fire collection"

import React from 'react';


const Title = props => {
    return (<header>
        <h1>{`${props.name}'s fire collection`}</h1>
    </header>
);
};

export default Title;