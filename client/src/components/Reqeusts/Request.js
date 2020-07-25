import React from 'react';

function Request({requestor}) {
    const {requestorName,requestorPhone,requestorAddress}=requestor;
    return (
        <div className="guest-card">
            <div className="card-head">
              <div>
                  <label>Requests
                  <i className="fas fa-check-square">
                      <input type="checkbox"/>
                  </i>
                  </label>
              </div>
              <div>
                  <button>
                      <i className="fas fa-user-edit"></i>
                  </button>
                  <button>
                      <i className="fas fa-trash-alt remove"></i>
                  </button>
              </div>

            </div>
            <div className="card-body">
              <h2>{requestorName}</h2>
              <span className="badge red">Planter</span>
              <div className="contact">
                  <i className="fas fa-phone-alt"></i>
                  <p>{requestorPhone}</p>
                  <p>{requestorAddress}</p>
              </div>
            </div>
        </div>
    );
}

export default Request;