import React, { Component, useState, useEffect } from 'react';
import CloudData from './data/google-data.json';
import ProgressBar from './ProgressBar';

import './App.css';


function App() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }} className="App">
            <input type="text" placeholder="Search" onChange={event => { setSearchTerm(event.target.value) }} />

            {CloudData.filter((CloudDetail) => {
                if (searchTerm == "") {
                    return CloudDetail
                } else if (CloudDetail.Student_Name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return CloudDetail
                }
            }).map((CloudDetail, index) => {
                return <div className="card" index={index} >
                    <div className="user-info">
                        <h2>{CloudDetail.Student_Name}</h2>
                        <ul class="badges">
                            <li>{CloudDetail.Quests_Completed}<strong>Quests Completed</strong></li>
                            <li>{CloudDetail.Skill_Badges_Completed}<strong>Skill Badges Completed</strong></li>
                        </ul>                        
                        <ProgressBar completed={CloudDetail.Quests_Completed} />


                    </div>
                </div>

            })}

        </div>
    );
}

export default App;
