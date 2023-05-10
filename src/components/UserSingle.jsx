import React, { useState } from "react";

const UserSingle = ({ id, user, handleDelete }) => {
  return (
    <tr key={user._id}>
      <td>{id}</td>
      <td>{user.name}</td>
      <td>{user.number}</td>
      <td>{user.group}</td>
      <td>{user.gender}</td>
      <td>{user.age}</td>
      <td>{user.status == "true" ? "available" : "not available"}</td>
      <td onClick={() => handleDelete(user._id)}>❌</td>
    </tr>
  );
};

export default UserSingle;
