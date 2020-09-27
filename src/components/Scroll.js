import React from 'react';

// props have children. can use this to create components that wrap other components. in this case we are wrapping CardList

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;