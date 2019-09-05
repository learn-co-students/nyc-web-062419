import React from 'react';
import MemberCard from '../Components/MemberCard';

function MVP(props) {
    let members = props.members.map(memberObj => (
        <MemberCard
            key={memberObj.name}
            memberInfo={memberObj}
            clickHandler={props.clickHandler}
        />
    ));
    return (
        <div className="container">
            <h1>MVP Container</h1>
            {members}
        </div>
    );
}

export default MVP;
