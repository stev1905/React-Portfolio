import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns profilePic">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                      return(
                              <li key={item.name}>
                                <a href={item.url}><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               <p>
               {
                  resumeData.aboutmeTwo
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <ul>
                       <li>Email: <span>{resumeData.email}</span></li>
                    </ul>
       					   </p>
                         <Button class="resumeButton" target="_blank" variant="contained" href="https://drive.google.com/file/d/1-LfKZCgpqJskE5FOZ8pJ6hhZ9rZMa2MK/view?usp=sharing">Resume</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}