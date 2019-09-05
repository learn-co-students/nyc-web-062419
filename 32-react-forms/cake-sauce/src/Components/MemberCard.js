import React from 'react';

class MemberCard extends React.Component {
    state = { clicked: false };

    clickHandler = () => this.setState({ clicked: !this.state.clicked });

    render() {
        return (
            <div>
                <img
                    src={this.props.memberInfo.image}
                    onClick={() => this.props.clickHandler(this.props.memberInfo)}
                />
                {this.state.clicked ? <h1>Name: {this.props.memberInfo.name}</h1> : null}
            </div>
        );
    }
}

export default MemberCard;
