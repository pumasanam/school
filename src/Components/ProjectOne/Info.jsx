import React from 'react';
import pic from "./../img/pic.jpg";
import pic1 from "./../img/pic1.jpg";
import pic2 from "./../img/pic2.jpg";

const Info = () => {
  return (
    <>
      <div className="info">
        <h4>SEE YOURSELF SUCCEED WITH A DEGREE IN BUSINESS <br /> ADMINISTRATION</h4>
      

        <div className="info_list">

            <div className="info_topic">
                <img src={pic} alt="" />
                <div className="info_content">
                    <h5>Carrer Reading</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore recusandae ea asperiores incidunt earum exercitationem unde magni facere est cupiditate quia assumenda perferendis, voluptate, adipisci quis natus libero laboriosam quibusdam!</p>
                </div>
            </div>

            <div className="info_topic">
                <img src={pic1} alt="" />
                <div className="info_content">
                    <h5>Nationally Accredited</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore recusandae ea asperiores incidunt earum exercitationem unde magni facere est cupiditate quia assumenda perferendis, voluptate, adipisci quis natus libero laboriosam quibusdam!</p>
                </div>
            </div>

            <div className="info_topic">
                <img src={pic2} alt="" />
                <div className="info_content">
                    <h5>Industy Connection</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore recusandae ea asperiores incidunt earum exercitationem unde magni facere est cupiditate quia assumenda perferendis, voluptate, adipisci quis natus libero laboriosam quibusdam!</p>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Info;
