import React from 'react';
import './PeopleList.css';

export const PeopleList = ({ people }) => {
    return (
        <ul>
        {people.map((person, i) => {
            return <div className="listings" key={i}>
                            <div className="label">
                                <div className="icon">
                                    <img src="chat_emoticon.png" alt="who?"/>
                                </div>
                                    <div className="info">
                                        <p>{`${person.first_name} ${person.last_name}`}</p>
                                        <p>{person.email}</p>
                                    </div>
                                <div className="mail">
                                    <img src="evelope open (1).png" alt="email"/>
                                </div>
                            </div>
                        </div>
        })}
        </ul>
    );
};