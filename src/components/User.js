import { useState } from "react";

const User = ({name}) => {
  const [count] = useState(0);


  return (
    <div className="user-card">
      <h1>This is Namaste React</h1>
      <h2>Name: {name}</h2>
      <h2>Count: {count}</h2>
      <h3>Location: New Delhi</h3>
      <h3>Contact: @vishal256</h3>
    </div>
  );
};

export default User;
