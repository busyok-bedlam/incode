import React, { Component } from "react";
import ListItem from "./list-item";

class List extends Component {
  componentDidMount() {
    this.props.getClients();
  }
  render() {
    const clients = this.props.clientsList;
    const formStatus = this.props.formStatus;
    const isClients = clients.length > 0 && clients.map( (client,index) => <ListItem client={client} key={index} />);
    return (
      <div >
        <h2 class="ui header">Clients List </h2>
        <div className="ui divided items">
        { isClients }
        </div>

      </div>
    );
  }
}

export default List;
