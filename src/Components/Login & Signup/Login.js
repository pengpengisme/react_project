import React from 'react'
import Meta from './Meta'
import Container from './Container'
import CustomInput from './CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Meta title={"登入"} />

    <Container className="login-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text text-center mb-3 pb-4">登入</h3>
            <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="email" name="email" placeholder="Email" />
              <CustomInput type="password" name="password" placeholder="Password"/>
              <div>
                <Link className='forgotlink pb-3' to="/forgot-password">忘記密碼?</Link>

                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button signup" type="submit">
                    login
                  </button>
                  <Link to="/signup" className="button signup border-dark">
                    signup
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </>
  );
}

export default Login