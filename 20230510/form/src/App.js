import { useState } from "react";
import EventForm from "./components/EventForm"
import ItemGenerator from "./components/ItemGenerator"

function App() {

  const [datas, setDatas] = useState([]);

  const addData = (data) => {
    setDatas([...datas, data]);
  }

  return (
    <div>
      <ItemGenerator/>
      < EventForm setDatas={setDatas}/>
    </div>
  );
}
export default App;
