import React from 'react';

class MemberCard extends React.Component {
 render() {
  console.log('Member Card Props', this.props.memberInfo);
  return <h1>{this.props.memberInfo.name}</h1>;
 }
}

export default MemberCard;
