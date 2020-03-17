import React from 'react';
import '../styles/_style.scss';
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
                <div className="home-name">AJ Hanus</div>
                <Navbar mobile={this.state.mobile} />
                <div className="profile-header">
                    <div className="profile-bio">
                        <h3>Computer Engineer</h3>
                        <h3>Full Stack Developer</h3>
                        <h3>In Search of Full Time Position</h3>
                    </div>
                </div>
                <div className="container-margins">
                    <section>
                        <SectionTitle title="About Me" />
                        <div className="about-me">
                            Hello! My name is AJ Hanus and I am an undergraduate in Computer 
                            Engineering. I am graduating in May and currently searching for a full-time position.
                            I am passionate about artificial intelligence, virtual reality, web development, and robotics.
                            I am currently a senior and have had various jobs throughout the 
                            software industry. I have worked for a startup in San Francisco, 
                            interned with Garmin in Kansas, spent a summer as a research undergrad at Iowa State University, and interned for Boeing. I am also working on a
                            side project called <a href="https://www.calchub.co" target="_blank" rel="noopener noreferrer">Calchub.co</a>. I am a member of Delta Tau Delta 
                            fraternity, the Iowa State Sailing Club, and the Out of the Darkness on-campus organization. 
                            In my free time, you'll find me either doing yoga, playing board games, kite boarding,
                            or throwing frisbee. Thanks for reading and feel free to email me at hanusaj@gmail.com.
                        </div>
                    </section>
                    <section>
                        <SectionTitle title="Taxi Driver Environment" />
                        <div className="taxi-bio">
                            Below is a project I did while learning about Q-Learning. For this project, I took the commonly solved
                            taxi problem that many people use as their first project and changed the environement. I wanted to
                            create my own environment to understand how I could apply Q-Learning in a new area. The main difference
                            in my taxi environment is the actions that can be taken. Originially, the taxi could move north, south, east,
                            or west. However, I introduced the idea of turning left or right and only being able to move forward. The
                            location of the pickup and dropoff location is also not fixed. This resulted in 62500 unique states which is
                            much higher then the original taxi environment. <br /><br /> There are multiple ways you can play with the environment
                            below. You can manually move the taxi with the buttons below or your keyboard. You can also press S or the Down arrow
                            key to use the trained agent to move the taxi.
                        </div>
                        <TaxiWrapper mobile={this.state.mobile} />
                    </section>
                </div>
            </div>
        )
    }
}
