import React from 'react';
import "./SelectedPlayer.css"

const SelectedPlayer = (props) => {

    const cart = props.cart
    



    return (
        <>

            <div className="cart">
                <h2>Selected Players</h2>
                <h3>Totall Selected Players: {props.cart.length}</h3>
                <ol>
                    {
                        cart.map(plr=> <li key={plr.idPlayer}>{plr.strPlayer}</li>)
                    }
                </ol>
            </div>
            
        </>
    );
};

export default SelectedPlayer;