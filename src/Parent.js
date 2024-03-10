import React from "react";
import Child from "./Child";

const Parent = () => {
  const users = [
    { id: 1, name: "anna", SurName: "Kvelashvili", age: 25 },
    { id: 2, name: "sofi", SurName: "Jikia", age: 15 },
    { id: 3, name: "dato", SurName: "Papidze", age: 45 },
  ];

  return (
    <div>
      <Child isUserLoggedIn={true} users={users} />
    </div>
  );
};

export default Parent;
