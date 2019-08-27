import React from 'react';
import MemberCard from './MemberCard';

function MVP(props) {
 let members = props.members.map(memberObj => (
  <MemberCard key={memberObj.name} memberInfo={memberObj} />
 ));
 return (
  <div>
   <h1>MVP Container</h1>
   {members}
  </div>
 );
}

export default MVP;
