import React from 'react';
import gamesData from "../gamesData";
import GameItem from "./GameItem";

//UI = fn(state, props)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: gamesData,
            gamesWillPlay: []
        };

        // this.removeGame = this.removeGame.bind(this);
    }

    removeGame = game => {
        const updateGames = this.state.games.filter(function (item) {
            return item.objectid !== game.objectid;
        });
        console.log(updateGames);
        this.state.games = updateGames;
        this.setState({
            games: updateGames
        })
    };

    removeGameFromWillPlay = game => {
        const willPlayGame = this.state.gamesWillPlay.filter(function (item) {
            console.log(item.objectid.toString());
            console.log(game.objectid.toString());
            return item.objectid !== game.objectid;
        });
        console.log(willPlayGame);
        this.setState({
            gamesWillPlay: willPlayGame
        })
    };

    addGameToPlay = game => {
        console.log(game);
        const willPlayGame = [...this.state.gamesWillPlay, game];

        this.setState({
            gamesWillPlay: willPlayGame
        })
    };


    render() {
        console.log("render", this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.games.map(game => {
                                return (
                                    <div className="col-6 mb-4" key={game.objectid}>
                                        <GameItem game={game}
                                                  removeGame={this.removeGame}
                                                  addGameToPlay={this.addGameToPlay}
                                                  removeGameFromWillPlay={this.removeGameFromWillPlay}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Play: {this.state.gamesWillPlay.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;



