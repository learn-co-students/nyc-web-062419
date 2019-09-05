import React from 'react';
import MemberCard from '../Components/MemberCard';

class RolesContainer extends React.Component {
 render() {
  let singer = this.props.members
    .filter(member => member.role === 'Lead Singer')
    .map(member => <MemberCard key={member.name} memberInfo={member} />);

  let guitarists = this.props.members
    .filter(member => member.role === 'Guitarist')
    .map(member => <MemberCard key={member.name} memberInfo={member} />);

  let bassists = this.props.members
    .filter(member => member.role === 'Bassist')
    .map(member => <MemberCard key={member.name} memberInfo={member} />);

  let xylophonists = this.props.members
    .filter(member => member.role === 'Xylophonist')
    .map(member => <MemberCard className="role-card" key={member.name} memberInfo={member} />);

  return (
   <div>
    <h1>Roles Container</h1>

    <h2>Lead Singer</h2>
    {singer}
    <h2>Guitarists</h2>
    {guitarists}
    <h2>Bassists</h2>
    {bassists}
    <h2>Xylophonists</h2>
    {xylophonists}
   </div>
  );
 }
}

export default RolesContainer;
