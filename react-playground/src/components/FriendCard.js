import React from 'react';
const FriendCard = (props) => {
    return (
        <div>
            <div className = "card">
                <div className = "img">
                    <img alt = {props.name} src = {props.image} />
                </div>
                {/* end of img */}
                <div className = "info">
                    <ul>
                        {/* pulls info from json */}
                        <li>Name: {props.name}</li>

                        <li>Occupation: {props.occupation}</li>

                        <li>Location: {props.location}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;