import React from "react";

const ListItem = ({ client }) => {
  let { firstName, lastName, avatar } = client.general;
  return (
      <div className="item ui grid">
        <div className="six wide column">
          <div className="image ui container">
            <img src={avatar} alt=""/>
          </div>
        </div>
        <div className="eight wide column">
            {firstName}
        </div>


      </div>
  );
};
export default ListItem;
