import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div className="mt-2">
      {data?.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
