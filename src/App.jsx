import "./App.css";
import Editor from "./components/Editor";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <>
      <div className="container">
        <Toolbar />
      </div>
      <div className="app-layout">
        <aside className="sidebar"></aside>
        <div className="app-content">
          <div className="container">
            <div className="editor-title">
              <Editor />
            </div>
            <div className="editor-body">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
