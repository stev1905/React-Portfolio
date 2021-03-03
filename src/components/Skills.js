import React, { Component } from 'react';
export default  class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="skills">
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                        <div className="nine columns main-col">
                            <p>
                                {resumeData.skillsDescription}
                            </p>
                        <div class="skillIcons">
                            <ul className="skills">
                                {
                                resumeData.skills.map((item) => {
                                    return(
                                    <li>
                                        <em>{item.skillname}</em>
                                    </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}