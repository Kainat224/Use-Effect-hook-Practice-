import React from 'react';

const UseEffectApi = () => {
  return (
    <>
      <h2 className='text-center mt-4'>List of GitHub Users</h2>
      <div className='container-fluid mt-5'>
        <div className="row text-center">
          <div className='col-5 col-md-4 mt-5'>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Anmol</h5>
                    <p className="card-text">Web Developer</p>
                    <div className='d-flex justify-content-between changingCardColor rounded p-2'>
                        <p>Para1 <br/> word</p>
                        <p>Para2 <br/> word</p>
                        <p>Para3 <br/> word</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseEffectApi;
