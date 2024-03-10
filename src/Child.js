import React from "react";

const Child = ({ users, isUserLoggedIn }) => {
  if (!isUserLoggedIn) {
    return <h1>you are not authorized</h1>;
  }

  if (users.length === 0) {
    return <div>no users in the system</div>;
  }

  return (
    <div>
      <div>
        {users.map((item) => (
          <h1 key={item.id}>
            {item.name}
            {item.SurName}
            {item.age}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Child;
