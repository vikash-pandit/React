

import Users from "./Users";

function App() {
  let userName = "Vikash Pandit"
  let age = 34;
  let email = "vikash@1234.com"
  return (
    <div>
      <h1>Hello</h1>
      {/* <h2>{name}</h2> */}
      <Users name = {userName}  age={age} email={email}/>
    </div>
  )
}

export default App;