import React, { useEffect, useState } from 'react';
import { addToDB } from '../fakeDB';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import "./PlayersContainer.css"

const PlayersContainer = () => {

    const [players , setPlayers] = useState([]);

    const handleSubmit =(event)=>{
        event.preventDefault()
        const name = event.target.name.value;

        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`)
        .then(res=> res.json())
        .then(data=> setPlayers(data.player))

    }

    const [cart,setCart] = useState([])
    const handleSelectedPlayer=(player)=>{
        const newPlayer = [...cart, player]
        setCart(newPlayer);
        addToDB(player.idPlayer)
    }

    return (


        <>

            <div className="banner">
                <div className="">

                    <h2>Search Player by Name</h2>

                    <form onSubmit={handleSubmit}>

                        <input name='name' type="text"/>

                        <span >
                            <button type='submit' className='searchField'>Search</button>
                        </span>

                    </form>

                </div>
            </div>

            <div className="container">

                <div className="box-1">

                    {
                        players.map(player=> <SinglePlayer
                            player={player}
                            key={player.idPlayer}
                            handleSelectedPlayer={handleSelectedPlayer}
                        >

                        </SinglePlayer>)
                    }

                </div>

                <div className="box-2">

                    <SelectedPlayer cart={cart}>

                    </SelectedPlayer>

                </div>

            </div>

            
        </>
    );
};

export default PlayersContainer;