import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
