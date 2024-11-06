import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";
// import FeatureComponent from "./components/FeatureComponent";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);

  return (
    <div className="min-h-screen bg-zinc-800 items-center justify-center flex flex-col gap-4">
    <h1>Redux Saga Basic Api fetching</h1>
      <button
        onClick={() => dispatch(getUsersFetch())}
        className="bg-white border-zinc-600 ring-2 ring-blue-500  p-2 px-4 rounded-md"
      >
        click
      </button>
      <div className="flex flex-col gap-2">
        <span className="text-white font-bold text-2xl bg-purple-300 rounded-md ">Users:</span>
        {users.map((user) => (
          <li className=" list-none bg-rose-400 rounded-md"><span className=""> {user.name} -- {user.email}</span></li>
        ))}
      </div>
    </div>
  );
}

export default App;
