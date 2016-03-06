var USER_DATA = {
    name: "Sai Avala",
    username: "savala",
    image: 'https://avatars2.githubusercontent.com/u/1852436?v=3&s=460'
};

var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
});

var FriendsContainer = React.createClass({
    render: function() {
        var friends = ['Nikunj', 'Suvamsh', 'Ronak', 'Kushal', 'Nitin']
        return (
            <div>
                <h3> Name: {this.props.name} </h3>
                <ShowList names={friends}/>
            </div>
        )
    }
});

var ShowList = React.createClass({
    render: function() {
        var listItems = this.props.names.map(function(friend) {
            return (<li> {friend} </li>)
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={this.props.image} style={{height: 100, width: 100}} />
        )
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <h1> {this.props.name} </h1>
        )
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <a href={'http://github.com/' + this.props.username}> {this.props.username} </a>
        )
    }
});

var ProfileContainer = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic image={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});

//ReactDOM.render(<FriendsContainer name="Sai Avala"/>, document.getElementById('app'))
ReactDOM.render(
    <ProfileContainer user={USER_DATA} />,
    document.getElementById('app')
)
