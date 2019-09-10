import React from 'react';
import { Link } from 'react-router-dom'

class MemberCard extends React.Component {

  clickHandler = () => this.setState({ clicked: !this.state.clicked });

  render() {
    let { memberInfo } = this.props
    console.log(memberInfo)
    return (
      <div 
        style={{height: '50vh', width: '50vh', border: '0.5px dotted black', margin: '5px'}}
        onClick={() => this.props.clickHandler(memberInfo)}
      >
        <img
          style={{height: '60%', width: '60%'}}
          src={memberInfo.image}
          alt={memberInfo.image}
        />
        <h3 style={{margin: '3px'}}>{memberInfo.name} aka {memberInfo.nickname}</h3>
        <Link to={`/members/${memberInfo.name}`}>
            <button>Go To Profile</button>
        </Link>
      </div>
    );
  }
}

export default MemberCard;
