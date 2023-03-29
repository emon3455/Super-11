import React from 'react';
import "./SinglePlayer.css"

const SinglePlayer = (props) => {
    
    console.log(props.player);
    const {strPlayer,strNationality, strSport,strThumb,strDescriptionEN} = props.player;
 
    return (
        <>

           <div className="card">
                <div className="thumb">
                    <img src={strThumb? strThumb : "https://www.shutterstock.com/image-photo/silhouette-woman-portrait-concept-unknown-260nw-358185458.jpg"} alt="" />
                </div>
                <div className="card-body">
                    <h3>Name: {strPlayer}</h3>
                    <p><strong>Nationality: </strong>{strNationality}</p>
                    <p>Playing Game: {strSport}</p>
                    <p>
                        DESCRIPTION: {strDescriptionEN? strDescriptionEN.slice(0,120)+"..." : "No Information available"}
                    </p>
                    <button>
                        Sign In
                    </button>

                </div>
           </div>


        </>
    );
};

export default SinglePlayer;