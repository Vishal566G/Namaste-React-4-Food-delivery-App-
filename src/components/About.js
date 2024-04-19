import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>This is About Page</h1>

        <UserClass name={"Vishal (Class)"} location={"New Delhi"} />
      </div>
    );
  }
}

// Functional Component
// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>

//       <UserClass name={"Vishal(Class)"} location={"New Delhi"} />
//     </div>
//   );
// };

export default About;
