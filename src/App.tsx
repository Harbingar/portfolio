import Nav from "./composants/nav";
import Bar from "./composants/infoBar";
import Home from "./composants/home";
function App() {

  return (
    <>
    <div className="flex flex-row">
      <Nav/>
      <Home/>
      <Bar/>
    </div>
    </>
  )
}

export default App
