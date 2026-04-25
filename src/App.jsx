

import Collage from "./Collage";

function App() {

  let collageName = ["IIT","IITT", "NIT"]
  return (
    <div>
      <h1>Hello</h1>
      <Collage  names = {collageName}/>
    </div>
  )
}

export default App;