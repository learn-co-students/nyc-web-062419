import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
            <div>

                {this.state.members.length > 0 ? (<div className="container">
                    <Switch>

                        <Route path="/members/:name" render={(routerProps) => {
                            console.log("router props", routerProps)
                            let name = routerProps.match.params.name
                            let member = this.state.members.find(member => member.name.toLowerCase() === name.toLowerCase())
                            return <MemberCard memberInfo={member}
                                clickHandler={this.props.clickHandler} />
                        }
                        } />
                        <Route path="/members" render={() => (
                            <div>

                                <h1>Index Container</h1>
                                <SearchForm value={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
                                <br />
                                <AddForm submitHandler={this.addToList} />
                                <ul>{memberComponents}</ul>
                            </div>
                        )} />
                    </Switch>
                </div>) : (<h1>Loading</h1>)
                }
            </div>

        );
    }
}

export default IndexContainer;
