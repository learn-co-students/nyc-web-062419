import React from 'react';
import MemberCard from './MemberCard';

class IndexContainer extends React.Component {
 render() {
  let memberComponents = this.props.members.map(member => (
   <MemberCard key={member.name} memberInfo={member} />
  ));

  return (
   <div>
    <h1>Index Container</h1>
    {memberComponents}
   </div>
  );
 }
}

export default IndexContainer;
