import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Hola",
        location: "Lokhandwala",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>This is Namaste React</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @vishal256</h3>
      </div>
    );
  }
}

export default UserClass;
