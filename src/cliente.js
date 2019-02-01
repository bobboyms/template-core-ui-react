import React from "react";

export default class Cliente extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <strong>Credit Card</strong>
                    <small>Form</small>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input className="form-control" id="name" type="text" placeholder="Enter your name" />
                        </div>
                      </div>
                    </div>
                   </div>
                </div>
            </div>
        );
    }

}