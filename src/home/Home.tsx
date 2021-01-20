import React from 'react';
import '../styles/_style.scss';
import profileImage from '../images/headshot.jpg';
import { Navbar } from '../components/Navbar';
import { SectionTitle } from '../components/SectionTitle';
import { TaxiWrapper } from '../taxi/TaxiEnvironment';

interface iHomeState {
    mobile: boolean
}

export class Home extends React.Component<{}, iHomeState> {
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

    render() {
        return (
            <div className="container">
                { !this.state.mobile && <div className="home-name">AJ Hanus</div> }
                <Navbar mobile={this.state.mobile} />
                <div className={this.state.mobile ? "profile-header-vert" : "profile-header-hori"}>
                    <div className="profile-bio">
                        <h3>Computer Engineer</h3>
                        <h3>Full Stack Developer</h3>
                        <h3>Passionate about Robotics</h3>
                    </div>
                    <div className="profile-image">
                        <img src={profileImage} alt="Me" />
                    </div>
                </div>
                <div className="container-margins">
                    <section>
                        <SectionTitle title="About Me" />
                        <div className="about-me">
                            Hello! My name is AJ Hanus and I am a Computer Engineering working at Dynetics. I am currently
                            working on two projects, DARPA Air Combat Evolution and Enduring Shield. Fot the DARPA Air Combat
                            Evolution project, our team is in Technical Area 3 which is tasked with creating an AI for large
                            scale air combat tactics. My role on the team is primarily as a Data Engineer writing python code
                            for processing ZMQ messages and loading the information into Postgres, Redis, or Presto databases.
                            On Enduring Shield, I am working on updating the messaging system to enable our missile launcher
                            to comunicate with the military network. For this project, I write C++ code while utilizing Qt for
                            our UI. I am passionate about artificial intelligence, virtual reality, web development, and robotics. 
                            My goal as an engineer is to find the hardest problems and have a direct impact on solving them.
                            In my free time, you'll find me remodeling my house with my brother, working out at the gym,
                            playing board games, kite boarding, or throwing frisbee. Thanks for reading and feel free to email me
                            at hanusaj@gmail.com.
                        </div>
                    </section>
                    {/* <section>
                        <SectionTitle title="Taxi Driver Environment" />
                        <div className="taxi-bio">
                            Below is a project I did while learning about Q-Learning. For this project, I took the commonly solved
                            taxi problem that many people use as their first project and changed the environement. I wanted to
                            create my own environment to understand how I could apply Q-Learning in a new area. The main difference
                            in my taxi environment is the actions that can be taken. Originially, the taxi could move north, south, east,
                            or west. However, I introduced the idea of turning left or right and only being able to move forward. The
                            location of the pickup and dropoff location is also not fixed. This resulted in 62,500 unique states which is
                            much higher then the original taxi environment. <br /><br /> There are multiple ways you can play with the environment
                            below. You can manually move the taxi with the buttons below or your keyboard. You can also press S or the Down arrow
                            key to use the trained agent to move the taxi.
                        </div>
                        <TaxiWrapper mobile={this.state.mobile} />
                    </section> */}
                </div>
            </div>
        )
    }
}
