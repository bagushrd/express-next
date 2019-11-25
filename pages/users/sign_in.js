import React from 'react';
import Head from 'next/head';

function Login(props) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui/dist/css/coreui.min.css" />
        <title>Admin - Login</title>
      </Head>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card p-4">
                <div className="card-body">
                  <form action="/users/sign_in" method="post">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <input className="form-control" type="text" placeholder="Username" name="username" />
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <input className="form-control" type="password" placeholder="Password" name="password" />
                    </div>
                    <div className="row">
                      <div className="col-4" style={{marginTop: 6}}>
                        <button className="btn btn-primary px-4" type="submit">Login</button>
                      </div>
                      {props.isFail ? (
                        <div className="col-8">
                          <div className="alert alert-danger" role="alert">Username/password does not match</div>
                        </div>
                      ) : <div />}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Login.getInitialProps = ({ query }) => {
  return {
    isFail: query.isFail
  }
}

export default Login