import React from 'react'
import userImg from "../assets/img/user.jpg"

const User = ({ userData, md }) => {
  return (
    <>


      {/* <div className="row  g-0">
          <div className="col-md-6">
            <div className="row flex-row-reverse g-0">
              <div className="col-md-6">
                <div className="user-img">
                  <img src={userData.img} width="100%" alt="" />
                </div>
              </div>

              <div className="col-md-6 bg-danger">
                <div className="user-text text-center h-100 d-flex flex-column align-items-center justify-content-center ">
                  <h4>{userData.heading}</h4>
                  <p>{userData.text}</p>

                  <span>{"<<|"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row flex-row-reverse g-0">
              <div className="col-md-6">
                <div className="user-img">
                  <img src={userData.img} width="100%" alt="" />
                </div>
              </div>

              <div className="col-md-6 bg-danger">
                <div className="user-text text-center h-100 d-flex flex-column align-items-center justify-content-center ">
                  <h4>{userData.heading}</h4>
                  <p>{userData.text}</p>

                  <span>{"<<|"}</span>
                </div>
              </div>
            </div>
          </div>

        </div> */}

      <div className={userData.direction == "row-reverse" ? "row flex-row-reverse arrow-light g-0" : "row arrow-light g-0"}>
        <div className={md ? "col-lg-6 lg" : "col-sm-6 sm"}>
          <div className="user-img">
            <img src={userData.img} width="100%" alt="" />
          </div>
        </div>

        <div className={md ? "col-lg-6 lg" : "col-sm-6 sm"}>
          <div className={userData.variant === "light" ? " user-text variant-light text-center h-100 d-flex flex-column align-items-center justify-content-center " : " user-text variant-blue text-center h-100 d-flex flex-column align-items-center justify-content-center "}>
            <h4>{userData.heading}</h4>
            <p>{userData.text}</p>

            <span>{"<<|"}</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default User