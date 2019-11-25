import React from 'react';

import Body from '../components/Body';

function Home() {
  return (
    <Body breadcrumb={'Home'}>
      <div className="container-fluid">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">Express Next</div>
                <div className="card-body">Welcome to Express Next Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default Home