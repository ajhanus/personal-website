import React from 'react';
import '../styles/_style.scss';
import { Navbar } from '../components/Navbar';
import poster from '../images/reu_poster.jpg';

const Projects: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="container-margins">
                    <div className="project">
                        <div className="project-title">Calchub.co</div>
                        <div className="project-description">
                            Calchub.co is an online math editor that I am working on with my brother to replace all the math 
                            editors that are currently out there. We have noticed that writing math on a computer is extremely 
                            difficult. So difficult that most people resort to writing it out on a piece of paper and then scanning 
                            in there work. On Calchub.co, math looks just as it would on a piece of paper and it's as easy to edit 
                            as a Microsoft Word document. 
                            <br></br>
                            <br></br> 
                            The website is currently live! Check it out 
                            <a className="project-calchub-link" href="https://calchub.co"> here</a> or see an embedded calculation below.
                        </div>
                        <br></br>
                        <br></br>
                        <div className="iframe-box">
                            <iframe src="https://calchub.co/embed/80b88092" className="iframe-item" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">IEEE VR 3DUI Contest 2019</div>
                        <div className="project-subtitle">Team VRAC: A Collaborative Virtual Reality Excape Room with Passive Haptics</div>
                        <br></br>
                        <div className="project-description">
                            <p>
                                For this project, I worked with a team of three graduate students from Iowa State University. We developed
                                a virtual reality escape room that incorporated six different passive haptic interactions. Passive haptics
                                are interactions with real world objects that provide physical feedback, the sense of touch, to the virtual
                                objects seen in the environment. 
                            </p>
                            <p>
                                My role on the team was a lead developer. We used Unity to develop our
                                environment and ran it on the HTC Vive head mounted display. We chose the HTC Vive because it gave us the
                                option to use the additional HTC Vive trackers for our passive haptics. We also networked two Vive systems
                                on different computers together to create a multi-user experience. We felt that having two users in the 
                                virtual escape room would be more similar to a real life escape room. We also utilized the Leap Motion 
                                to track the hands of the users. This gave the users to ability to freely use their hands since the Vive
                                controllers were not required.
                            </p>
                            <p>
                                Our team was accepted into the IEEE VR 3DUI 2019 contest from our submission. We traveled to Osaka, Japan for
                                the conference and presented our experience over three days. Our team finished runner-up in the conference.
                            </p>
                            <p>
                                Our submission video can be seen below and our paper can be found in the conference preceedings 
                                <a href="https://ieeexplore.ieee.org/xpl/conhome.jsp?punumber=1000791" target="_blank"> here</a>.
                            </p>
                        </div>
                        <br></br>
                        <div className="iframe-box">
                            <iframe src="https://www.youtube.com/embed/qwyVEyEUxEA" className="iframe-item" />
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">SPIRE REU - Summer Program</div>
                        <div className="project-subtitle">Indoor Climate Control Data Visualization Tool for Marginalized Individuals</div>
                        <br></br>
                        <div className="project-description">
                            <p>
                                During the summer of 2018, I was given the opportunity to join the SPIRE REU - Summer Program at Iowa
                                State University in the Virtual Reality Application Center, VRAC. Twelve undergraduate students were
                                chosen to work under an NSF grant #1757900 on various proects for Iowa State professors. The REU program was
                                focused on giving undergraduates an idea of what graduate school would be like.
                            </p>
                            <p>
                                Over the summer, I worked on a Data Visualization website that would help teach marginalized
                                populations different indoor climate control topics. In four weeks, we created a React website with
                                different graphics to display the indoor climate of a person's home. We also wrote a paper over our
                                work and it can be seen <a href="/pdfs/reu_paper.pdf" target="_blank">here</a>.
                            </p>
                        </div>
                        <img className="spire-poster" src={ poster } />
                    </div>
                    <div className="project">
                        <div className="project-title">Pocket Closet</div>
                        <div className="project-description">
                            Pocket closet was a project I completed for the Com Sci 309 class at Iowa State University. For 
                            this class, my team and I were required to submit a project proposal, complete weekly updates with 
                            our TA, and create a poster outlining our application. The application my team produced for our 
                            project was an android phone application. Our application, Pocket Closet, was an outfit generator 
                            that the user would utilize daily to generate a random outfit, depending on the weather and other 
                            clothes they may have chosen to wear. The goal of our project was to create a one stop shop for our 
                            users to determine what clothes they should wear each day.
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">Roguelike Dungeon in Terminal</div>
                        <div className="project-description">
                            This is where I will talk about Com Sci 327.
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-title">Dungeons and Dragons Map Builder</div>
                        <div className="project-description">
                            This is where I will talk about Prizm Labs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
