import React from 'react';
import { Link } from 'react-router-dom'

class MemberCard extends React.Component {

  clickHandler = () => this.setState({ clicked: !this.state.clicked });

  render() {
    let { memberInfo } = this.props
    return (
      <div>
        <img
          src={memberInfo.image}
          onClick={() => this.props.clickHandler(memberInfo)}
        />
        <Link to={`/members/${memberInfo.name}`}>
            <button>Go To Profile</button>
        </Link>
      </div>
    );
  }
}

export default MemberCard;
