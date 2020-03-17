import React from 'react';
import '../styles/_style.scss';
import { Navbar } from '../components/Navbar';
import poster from '../images/reu_poster.jpg';

interface iProjectsState {
    mobile: boolean;
}

export class Projects extends React.Component<{}, iProjectsState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            mobile: window.innerWidth < 1300
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
        this.setState({ 
            mobile: window.innerWidth < 1300
        });
    };

    render () {
        return (
            <div>
                <Navbar mobile={this.state.mobile} />
                <div className="container">
                    <div className="container-margins">
                        <div className="project">
                            <div className="project-title">Calchub.co</div>
                            <div className="project-description">
                                Calchub.co is an online math editor that I am working on with my brother to replace all the math 
                                editors that are currently out there. We have noticed that writing math on a computer is extremely 
                                difficult. So difficult that most people resort to writing it out on a piece of paper and then scanning 
                                in there work. On Calchub.co, math looks just as it would on a piece of paper and it's as easy to edit 
                                as any other text online. 
                                <br></br>
                                <br></br> 
                                The website is currently live! Check it out 
                                <a className="project-calchub-link" href="https://calchub.co"> here</a> or see an embedded calculation below.
                            </div>
                            <br></br>
                            <br></br>
                            <div className="iframe-box">
                                <iframe src="https://calchub.co/embed/80b88092" className="iframe-item" title="CalcHub Calc" />
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
                                    <a href="https://ieeexplore.ieee.org/xpl/conhome.jsp?punumber=1000791" target="_blank" rel="noopener noreferrer"> here</a>.
                                </p>
                            </div>
                            <br></br>
                            <div className="iframe-box">
                                <iframe src="https://www.youtube.com/embed/qwyVEyEUxEA" className="iframe-item" title="IEEE Video" />
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
                                    work and it can be seen <a href="/pdfs/reu_paper.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                                </p>
                            </div>
                            <img className="spire-poster" src={ poster } alt="Spire REU" />
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
                                During the fall semester of 2017, I took Com Sci 327 at Iowa State University. This course 
                                covered object-oriented programming using C and C++. The main topics of covered were memory 
                                management, parameter passing, inheritance, compiling, debugging, and maintaining programs. 
                                Each of the topics were covered over weekly coding assignments. The coding assignments were 
                                built on each other and by the end of the semester, we had created a full terminal based 
                                roguelike dungeon game. 
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-title">Dungeons and Dragons Map Builder</div>
                            <div className="project-description">
                                <p>
                                    After my freshman year of college, I was given the opportunity to work a startup based 
                                    in San Fransisco called Play Table. Play Table was a hardware company creating a board 
                                    game console. Over the summer, my job was to create demo software to show off the 
                                    hardware they had produced.
                                </p>
                                <p>
                                    My main project for the summer at Play Table was a Dungeons and Dragons Map Builder for
                                    the hardware. I used the Unity game engine with C# to create a tile based creation
                                    application. The applicaiton was also able to use physical objects with the virtual display,
                                    creating a wholesome DnD experience.
                                </p>
                                <p>
                                    While at Play Table, I was also given the chance to present at the 2016 E3 expo. At E3,
                                    I learned a lot about where the industry was as got the chance to help Play Table present
                                    to thousands of E3 attendants.
                                </p>
                                <p>
                                    My favorite project for Play Table, however, was porting Deep Sea Adventures to the device.
                                    Deep Sea Adventures was a multiplayer dice roling treasure hunt board game. It was fun to
                                    create because I was able to create unique ways to control the experience. Since it was
                                    only a demo application, I abstracted some of the logic and gave the users more control
                                    over the environment. This project was my favorite because of the unique solution I created.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
