import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://picsum.photos/200/300",
      name: "luong tan dai",
      placeCount: 3,
    },
    {
      id: "u2",
      image: "https://picsum.photos/200/300",
      name: "luong tan dai 2",
      placeCount: 2,
    },
    {
      id: "u3",
      image: "https://picsum.photos/200/300",
      name: "luong tan dai 3",
      placeCount: 1,
    },
  ];

  return <UserList items={USERS}></UserList>;
};

export default Users;
