import React, { useEffect, useState } from 'react';

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch ('https://api.github.com/users');
    setUsers(await response.json());
    // console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <h2 className='text-center mt-4'>List of GitHub Users</h2>
      <div className='container-fluid mt-5'>
        <div className="row text-center">

        {
          users.map((curEle) => {
            return(
              <>
              <div className='col-5 col-md-4 mt-5' key={curEle.id}>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={curEle.avatar_url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{curEle.login}</h5>
                        <p className="card-text">Web Developer</p>
                        <div className='d-flex justify-content-between changingCardColor rounded p-2'>
                            <p>Site Admin <br/> {curEle.site_admin}</p>
                            <p>Type <br/> {curEle.type}</p>
                            <p>ID <br/> {curEle.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }

          
        </div>
      </div>
    </>
  )
}

export default UseEffectApi;
