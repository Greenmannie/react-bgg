import React from 'react';

class GameItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            willPlay: false
        };
    }

    getOnClick(removeGameFromWillPlay, game, addGameToPlay) {
        return () => {
            this.state.willPlay ?
                removeGameFromWillPlay(game) :
                addGameToPlay(game);
            this.setState({willPlay: !this.state.willPlay})
        };
    }

    render() {
        const {game, removeGame, addGameToPlay, removeGameFromWillPlay} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={game.imageurl} alt=""/>
                <div className="card-body">
                    <h6 className="card-title">{game.name}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="nb-0">Rating: {game.rank}</p>
                        <button type="button" className={this.state.willPlay ? "btn btn-success" : "btn btn-secondary"}
                                onClick={this.getOnClick(removeGameFromWillPlay, game, addGameToPlay)}
                        >{this.state.willPlay ? "Remove Will Play" : "Will Play"}
                        </button>
                    </div>
                    <button onClick={removeGame.bind(null, game)}>
                        Delete game
                    </button>
                </div>
            </div>
        );
    }
}


export default GameItem;