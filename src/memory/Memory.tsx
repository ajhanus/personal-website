import React from 'react';
import { Link } from 'react-router-dom';

const words = [
    'tye', 'Noah', 'ma', 'rye', 'law',
    'shoe', 'cow', 'ivy', 'bee', 'toes',
    'tot', 'tin', 'tomb', 'tire', 'towel',
    'dish', 'tack', 'dove', 'tub', 'nose',
    'net', 'nun', 'name', 'Nero', 'nail',
    'notch', 'neck', 'knife', 'knob', 'mice',
    'mat', 'moon', 'mummy', 'mower', 'mule',
    'match', 'mug', 'movie', 'mop', 'rose',
    'rod', 'rain', 'ram', 'rower', 'roll',
    'roach', 'rock', 'roof', 'rope', 'lace'
]

interface iMemoryState {
    visible: number;
}

export class Memory extends React.Component<{}, iMemoryState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            visible: 5
        }
    }

    render() {
        return (
            <div>
                <Link to={ "/" }></Link>
                <ol>
                    {
                        words.map(word => {
                            return ( <li>{ word }</li> );
                        })
                    }
                </ol>
            </div>
        )
    }
}