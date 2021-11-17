import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className ="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Argoubi Mohamed Yassine</h1>
                    <h2>Ingénieur en Génie Logiciel</h2>
                    <div className="pdf">
                        <a href="./media/CV_MOHAMED_YASSINE.pdf" target="_blank" >Télecharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;