import React from 'react';



const Info = ({ clientinfo }) => {
  if (clientinfo) {
    var { general, address, job, contact } = clientinfo;
    var { firstName, lastName, avatar } = general;
    var { company, title } = job;
    var { email, phone } = contact;
    var { street, city, zipCode, country } = address;
  }

  const info = (
    <div className="ui container grid">
      <div className="four wide column">
        <div className="ui card">
          <div className="image container">
            <img src={avatar} alt="" />
          </div>
          <div className="content">
            <p className="header">{firstName} {lastName}</p>
          </div>
        </div>
      </div>
      <div className="twelve wide column">
        <div className=" ui container list">
          <div className="item">
            <i className="icon phone"></i>
            <div className="content">{phone}</div>
          </div>
          <div className="item">
            <i className="icon mail"></i>
            <div className="content">{email}</div>
          </div>
          <div className="item">
            <i className="icon marker"></i>
            <div className="content">{city}</div> 
          </div>
          <div className="item">
            <i className="icon">street</i>
            <div className="content">{street}</div>
          </div>
          <div className="item">
            <i className="icon">ZipCode</i>
            <div className="content">{zipCode}</div>
          </div>
          <div className="item">
            <i className="icon">Country</i>
            <div className="content">{country}</div>  
          </div>

          <div className="item">
            <i className="icon">proffesion</i>
            <div className="content">{title}</div>
          </div>
          <div className="item">
            <i className="icon">company</i>
            <div className="content">{company}</div>
          </div>


        </div>
      </div>
    </div>)

  return (
    <div className="container">
      <h1 className="ui header">Client Info</h1>
      {clientinfo && info}
    </div>

  )
}

export default Info;
