import React from 'react';
import MemberCard from './MemberCard';

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
   .map(member => (
    <MemberCard className="role-card" key={member.name} memberInfo={member} />
   ));

  return (
   <div>
    <h1>Roles Container</h1>

    <h3>Lead Singer</h3>
    {singer}
    <h3>Guitarists</h3>
    {guitarists}
    <h3>Bassists</h3>
    {bassists}
    <h3>Xylophonists</h3>
    {xylophonists}
   </div>
  );
 }
}

export default RolesContainer;
