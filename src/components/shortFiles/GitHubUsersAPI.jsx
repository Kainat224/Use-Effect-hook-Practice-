import React from 'react';
import { FcApproval } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const GitHubUsersAPI = ({users}) => {
  return (
    <>
    <h2 className='text-center mt-4'>List of GitHub Users</h2>
    <div className='container-fluid mt-5'>
      <div className="row text-center">

      {
        users.map((curEle) => {
            const {id, avatar_url, login, site_admin, type} = curEle;
          return(
            <div className='col-5 col-md-4 mt-5' key={id}>
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={avatar_url} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{login} <FcApproval/> <FaGithub/></h5>
                      <p className="card-text">Web Developer</p>
                      <div className='d-flex justify-content-between changingCardColor rounded p-2'>
                          <p>Site Admin <br/> {site_admin}</p>
                          <p>Type <br/> {type}</p>
                          <p>ID <br/> {id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }        
      </div>
    </div>
  </>
  )
}

export default GitHubUsersAPI
