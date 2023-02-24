import { useState } from "react";
import { tabledata } from "./Data";
import "./App.css";
import { TableList } from "./TableList";
import { Editusers } from "./Editusers";

function App() {
  // useState

  const [data, setdata] = useState(tabledata);
  const [edites, seteditable] = useState(null);

 
  // function
  const editable = (id) => {
    seteditable(data.find((v) => v.id === id));
  };

  const updatetable = (tabledata) => {
    const index = data.findIndex((v) => v.id === tabledata.id);
    const newvideo = [...data];
    newvideo.splice(index, 1, tabledata);
    setdata(newvideo);
    console.log(newvideo);
  };

  return (
    <div>
      <TableList data={data} editable={editable} />
      <Editusers updatetable={updatetable} edites={edites} />
 
    </div>
  );
}

export default App;
