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
    fetch('http://localhost:4000/api/v1/members')
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
        <MemberCard
          key={member.name}
          memberInfo={member}
          clickHandler={this.props.clickHandler}
        />
    ));

  return (
    <div>
    {console.log(this.state)}
      {
        this.state.members.length > 0 
        ? <div className="container">
            <Switch>
              <Route 
                path="/members/:name" 
                render={(routerProps) => {
                  console.log("router props", routerProps)
                  let name = routerProps.match.params.name
                  let member = this.state.members.find(member => member.name.toLowerCase() === name.toLowerCase())
                  return <MemberCard memberInfo={member} clickHandler={this.props.clickHandler} />
                }} 
              />
              <Route 
                path="/members" 
                render={() => (
                  <div>
                    <h1 className={'center'}>Index Container</h1>
                    <SearchForm value={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
                    <br />
                    <AddForm submitHandler={this.addToList} />
                    <div style={{display: "flex", flexWrap: "wrap", margin: 'auto', width: '90vw', justifyContent: 'space-between'}}>
                      {memberComponents}
                    </div>
                  </div>
              )} />
            </Switch>
          </div> 
        : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default IndexContainer;
