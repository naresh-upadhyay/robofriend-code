import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const CardArray = robots.map((value,index) => {
        console.log('cardlist' , value);
        return (<Card key={index} id = {robots[index].id} name = {robots[index].name} email = {robots[index].email}/>);
    });
    
    return (
        <div>
            {CardArray}
        </div>
    );
}
export default CardList;