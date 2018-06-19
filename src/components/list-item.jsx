import React from "react";
import selectClientAction from '../actions';


const ListItem = ({ client,selectClientAction }) => {
  let { firstName, lastName, avatar } = client.general;
  const selectHandler = e => {
    
    e.preventDefault();
    selectClientAction(firstName);
  }
  return (
      <div className="item ui grid hover-item" onClick={selectHandler}>
        <div className="six wide column">
          <div className="image ui container">
            <img src={avatar} alt=""/>
          </div>
        </div>
        <div className="eight wide column items">
          <div className="item">
            {firstName}
          </div>
          <div className="item">
            {lastName}
          </div>

        </div>


      </div>
  );
};
export default ListItem;
