import React from 'react';

const ScrollBar = (props) =>{
    return (
        <div style={{overflowY:'scroll' , border:'1px solid black' , height:'800px'}}>
            {props.children}
        </div>
    );
}
export default ScrollBar;