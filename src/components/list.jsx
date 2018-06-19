import React, { Component } from "react";
import ListItem from "../containers/client-item";

class List extends Component {
  componentDidMount() {
    this.props.getClients();
  }
  render() {
    const clients = this.props.clientsList;
    const formStatus = this.props.formStatus;
    const loader = (
      <div className="ui container">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    )
    const isClients = clients.length > 0 ;
    return (
      <div >
        <h2 className="ui header">Clients List </h2>
        <div className="ui divided items">
        {
          isClients ?
            clients.map( (client,index) => <ListItem client={client} key={index} />) :
            loader
        }
        </div>

      </div>
    );
  }
}

export default List;
