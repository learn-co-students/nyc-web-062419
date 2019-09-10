import React from 'react';
import MemberCard from '../Components/MemberCard';
import RolesContainer from './RolesContainer';

function Favorites(props) {
  let members = props.members.map(memberObj => (
    <MemberCard
      key={memberObj.name}
      memberInfo={memberObj}
      clickHandler={props.clickHandler}
    />
  ));
  return (
    <div className="container">
      <h1>Favorites Container</h1>
      <RolesContainer members={props.members} />
      {/* {members} */}
    </div>
  );
}

export default Favorites;
