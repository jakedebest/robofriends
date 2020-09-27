import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


// PROPS are input we get. They come out of state. The child cannot change the property.

// STATE = an object that is a description of your application. STATE can change


class App extends Component { // app owns the state. any Component that has state uses the Class syntax -> can use constructor function (built in to react) to create this.state. this.state changes.
    constructor() { // react uses this.state to pass robots&searchField as PROPS to the components in Render.
        super()
        this.state = { // our app component has two states, robots, and searchField.
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>  response.json()) // when on one line, after => will be what is returned.
            .then((users) => this.setState({ robots: users})); // set the robots state to users, pulls the users array and puts it in robots one.
    }

    onSearchChange = (event) =>  { // we pass this state on to SearchBox 
        this.setState({ searchField: event.target.value}) // setting the state of searchField to the event.target.value, which is what is whats typed in the search box.

    }

    render () {
        const { robots, searchField } = this.state; // destructuring. dont need the this.state prefix every time now.

        const filteredRobots = robots.filter(robot => { // filter through the robots array in the state, give it value 'robot'
            return robot.name.toLowerCase().includes(searchField.toLowerCase()); // filter it & return the name in lowercase that includes the searchFields event.target.value
        })

        if (!robots.length) { // if there are NOT robots (robots.length === true if there are >0) then show loading screen
            return <h1>Loading..</h1>
        } else {
        return (
            <div className = 'tc'> 
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>  
        );
        }
    }
}

// when there is a change on the  input(onChange in SearchBox.js) , run searchChange. searchChange runs the functions in App.js, which gets the event.target.value of the searchField.
export default App;