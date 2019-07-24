import React from 'react';

function Card(props) {
    const { id, name, email } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img alt={`Robot not found`} src={`https://robohash.org/${id}?set=set2`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;
