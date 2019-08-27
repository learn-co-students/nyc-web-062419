import React from 'react';
import MemberCard from './MemberCard';

class IndexContainer extends React.Component {
 render() {
  let memberComponents = this.props.members.map(member => (
   <li>
    <MemberCard
     key={member.name}
     memberInfo={member}
     clickHandler={this.props.clickHandler}
    />
   </li>
  ));

  return (
   <div>
    <h1>Index Container</h1>
    <ul>{memberComponents}</ul>
   </div>
  );
 }
}

export default IndexContainer;
