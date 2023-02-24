import React from "react";

export const TableList = ({ data, editable }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r) => {
            return (
              <tr key={r.id}>
                <td>{r.id} </td>
                <td> {r.name}</td>
                <td>{r.email}</td>
                <td> {r.mobilenumber}</td>
                <td>{r.address}</td>
                <button onClick={() => editable(r.id)}>Edit</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
