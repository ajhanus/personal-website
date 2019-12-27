import React from 'react';
import reward_table from './reward_table.json';
import q_table from './q_table.json';

interface iTaxiWrapperProps {
    mobile: boolean;
}

interface iTaxiWrapperState {
    boardState: string;
    score: number;
    width: number;
    height: number;
    keydown: string;
}

export class TaxiWrapper extends React.Component<iTaxiWrapperProps, iTaxiWrapperState> {
    table: any;
    qTable: any;

    constructor(props: iTaxiWrapperProps) {
        super(props);
        this.state = {
            boardState: this.getRandomState(),
            score: 0,
            width: 5,
            height: 5,
            keydown: ""
        }
        this.table = reward_table;
        this.qTable = q_table;
    }

    componentWillMount() {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keydown', this.onKeyUp);
    }

    onKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode === 81) {
            this.setState({
                keydown: "Q"
            });
            event.preventDefault();
        }
        if (event.keyCode === 38 || event.keyCode === 87) {
            this.setState({
                keydown: "W"
            });
            event.preventDefault();
        }
        if (event.keyCode === 69) {
            this.setState({
                keydown: "E"
            });
            event.preventDefault();
        }
        if (event.keyCode === 37 || event.keyCode === 65) {
            this.setState({
                keydown: "A"
            });
            event.preventDefault();
        }
        if (event.keyCode === 40 || event.keyCode === 83) {
            this.setState({
                keydown: "S"
            });
            event.preventDefault();
        }
        if (event.keyCode === 39 || event.keyCode === 68) {
            this.setState({
                keydown: "D"
            });
            event.preventDefault();
        }
    }

    onKeyUp = (event: KeyboardEvent) => {
        // Q
        if (event.keyCode === 81) {
            this.actionPickup();
            event.preventDefault();
        }
        // Up || W
        if (event.keyCode === 38 || event.keyCode === 87) {
            this.actionFoward();
            event.preventDefault();
        }
        // E
        if (event.keyCode === 69) {
            this.actionDropoff();
            event.preventDefault();
        }
        // Left || A
        if (event.keyCode === 37 || event.keyCode === 65) {
            this.actionLeft();
            event.preventDefault();
        }
        // Down || S
        if (event.keyCode === 40 || event.keyCode === 83) {
            this.actionAgent();
            event.preventDefault();
        }
        // Right || D
        if (event.keyCode === 39 || event.keyCode === 68) {
            this.actionRight();
            event.preventDefault();
        }
        this.setState({
            keydown: ""
        });
    }

    actionFoward = () => {
        const move = this.table[this.state.boardState][0]
        this.setState((prevState, props) => {
            return {
                boardState: move[1],
                score: prevState.score + parseInt(move[2])
            }
        });
    }

    actionLeft = () => {
        const move = this.table[this.state.boardState][1]
        this.setState((prevState, props) => {
            return {
                boardState: move[1],
                score: prevState.score + parseInt(move[2])
            }
        });
    }

    actionRight = () => {
        const move = this.table[this.state.boardState][2]
        this.setState((prevState, props) => {
            return {
                boardState: move[1],
                score: prevState.score + parseInt(move[2])
            }
        });
    }

    actionPickup = () => {
        const move = this.table[this.state.boardState][3];
        this.setState((prevState, props) => {
            return {
                boardState: move[1],
                score: prevState.score + parseInt(move[2])
            }
        });
    }

    actionDropoff = () => {
        const move = this.table[this.state.boardState][4]
        if (move[3]) {
            console.log("You win!");
            this.setState((prevState, props) => {
                return {
                    boardState: this.getRandomState(),
                    score: prevState.score + parseInt(move[2])
                }
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    boardState: move[1],
                    score: prevState.score + parseInt(move[2])
                }
            });
        }
    }

    actionAgent = () => {
        const move = this.table[this.state.boardState][this.qTable[this.state.boardState].indexOf(Math.max(...this.qTable[this.state.boardState]))];
        if (move[3]) {
            console.log("You win!");
            this.setState((prevState, props) => {
                return {
                    boardState: this.getRandomState(),
                    score: prevState.score + parseInt(move[2])
                }
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    boardState: move[1],
                    score: prevState.score + parseInt(move[2])
                }
            });
        }
    }

    getRandomState = () => {
        return Object.keys(reward_table)[Math.floor((Math.random() * Object.keys(reward_table).length))];
    }

    setRandomState = () => {
        this.setState({
            boardState: this.getRandomState()
        });
    }

    render() {
        const currentState = this.state.boardState.split('-');
        const taxiWrapperStyle = this.props.mobile ? "taxi-wrapper-mobile" : "taxi-wrapper";

        const q_image = this.state.keydown === "Q" ? "key_QPressed.png" : "key_Q.png";
        const w_image = this.state.keydown === "W" ? "key_WPressed.png" : "key_W.png";
        const e_image = this.state.keydown === "E" ? "key_EPressed.png" : "key_E.png";
        const a_image = this.state.keydown === "A" ? "key_APressed.png" : "key_A.png";
        const s_image = this.state.keydown === "S" ? "key_SPressed.png" : "key_S.png";
        const d_image = this.state.keydown === "D" ? "key_DPressed.png" : "key_D.png";

        return (
            <div className={taxiWrapperStyle}>
                { this.props.mobile ? <div className="taxi-score">Score: {this.state.score}</div> : null }
                <div className="taxi-display-wrapper">
                    <div className="taxi-display">
                        <img
                            src={process.env.PUBLIC_URL + '/images/background.svg'}
                            className="background"
                            alt="logo"
                        />
                        <TaxiBoard
                            width={this.state.width}
                            height={this.state.height}
                            taxi={parseInt(currentState[0])}
                            taxiDirection={parseInt(currentState[1])}
                            pickup={parseInt(currentState[2])}
                            dropoff={parseInt(currentState[3])}
                        />
                    </div>
                </div>
                <div className="taxi-controls">
                    { this.props.mobile ? null : <div className="taxi-score">Score: {this.state.score}</div> }
                    <div className="title">Controls:</div>
                    <div className="key-row-wrapper">
                        <div className="key-row">
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + q_image}
                                onClick={this.actionPickup}
                                onPointerDown={() => { this.setState({ keydown: "Q" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="Q key"
                            />
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + w_image}
                                onClick={this.actionFoward}
                                onPointerDown={() => { this.setState({ keydown: "W" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="W key"
                            />
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + e_image}
                                onClick={this.actionDropoff}
                                onPointerDown={() => { this.setState({ keydown: "E" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="E key"
                            />
                        </div>
                        <div className="key-row">
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + a_image}
                                onClick={this.actionLeft}
                                onPointerDown={() => { this.setState({ keydown: "A" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="A key"
                            />
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + s_image}
                                onClick={this.actionAgent}
                                onPointerDown={() => { this.setState({ keydown: "S" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="S key"
                            />
                            <img
                                src={process.env.PUBLIC_URL + '/images/keys/' + d_image}
                                onClick={this.actionRight}
                                onPointerDown={() => { this.setState({ keydown: "D" }) }}
                                onPointerUp={() => { this.setState({ keydown: "" }) }}
                                alt="D key"
                            />
                        </div>
                    </div>
                    <div className="random-state-button" onClick={this.setRandomState}>New Random State</div>
                </div>
            </div>
        )
    }
}

interface iTaxiBoardProps {
    width: number;
    height: number;
    taxi: number;
    taxiDirection: number;
    pickup: number;
    dropoff: number;
}

class TaxiBoard extends React.Component<iTaxiBoardProps, {}> {
    render() {
        const rows = [];
        for (var i = 0; i < this.props.height; i++) {
            rows.push(<BoardRow key={i} width={this.props.width} />);
        }

        return (
            <div className="taxi-board">
                { rows }
                { this.props.pickup !== this.props.dropoff && <BoardObject position={this.props.pickup} name={"pickup"} /> }
                <BoardObject position={this.props.dropoff} name={"dropoff"} />
                <BoardObject position={this.props.taxi} name={"taxi"} rotation={this.props.taxiDirection} />
            </div>
        )
    }
}

interface iBoardRowProps {
    width: number;
}

class BoardRow extends React.Component<iBoardRowProps, {}> {
    render() {
        const elements = []
        for (var i = 0; i < this.props.width; i++) {
            elements.push(<BoardTile key={i} />);
        }
        return (
            <div className="board-row">
                {elements}
            </div>
        )
    }
}

class BoardTile extends React.Component<{}, {}> {
    render() {
        return (
            <>
                <img
                    src={process.env.PUBLIC_URL + '/images/road.svg'}
                    className="road-tile"
                    alt="Road"
                />
            </>
        )
    }
}

interface iBoardObjectProps {
    position: number;
    name: string;
    rotation?: number;
}

class BoardObject extends React.Component<iBoardObjectProps, {}> {
    render() {
        let style: { left: string, top: string, transform?: string } = {
            left: ((this.props.position % 5) * 20) + "%",
            top: (Math.floor(this.props.position / 5) * 20) + "%",
        }
        if (this.props.rotation) {
            style = {
                left: ((this.props.position % 5) * 20) + "%",
                top: (Math.floor(this.props.position / 5) * 20) + "%",
                transform: `rotate(${this.props.rotation * 90}deg)`
            }
        }
        return (
            <img
                src={process.env.PUBLIC_URL + '/images/' + this.props.name + '.svg'}
                className={this.props.name}
                style={style}
                alt={"Image for " + this.props.name}
            />
        )
    }
}