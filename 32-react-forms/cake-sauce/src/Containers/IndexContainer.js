import React from 'react';
import MemberCard from '../Components/MemberCard';
import AddForm from '../Components/AddForm';
import SearchForm from '../Components/SearchForm';

class IndexContainer extends React.Component {
    state = {
        members: [],
        searchTerm: ""
    }

    componentDidMount() {
        console.log('Index Did Mount');
        fetch('http://localhost:3000/band')
            .then(resp => resp.json())
            .then(data => this.setState({ members: data }));
    }


    addToList = (memberObj) => {
        console.log("testing testing 1,2,3")
        this.setState({ members: [memberObj, ...this.state.members] })
    }

    searchChangeHandler = (searchTerm) => {
        this.setState({ searchTerm: searchTerm })

    }

    filterMembers = () => {
        let newMembers = this.state.members.filter(member => member.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return newMembers
    }



    render() {
        console.log("Index Render")
        let memberComponents = this.filterMembers().map(member => (
            <li>
                <MemberCard
                    key={member.name}
                    memberInfo={member}
                    clickHandler={this.props.clickHandler}
                />
            </li>
        ));

        return (
            <div className="container">
                <h1>Index Container</h1>
                <SearchForm value={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
                <br />
                <AddForm submitHandler={this.addToList} />
                <ul>{memberComponents}</ul>
            </div>
        );
    }
}

export default IndexContainer;
