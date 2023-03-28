import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <>
            
            <div className="banner">
                <div className="">

                    <h3>Search Player by name</h3>

                    <input type="text" />
                    <span>
                        <button>Search</button>
                    </span>
                </div>
            </div>

        </>
    );
};

export default Banner;