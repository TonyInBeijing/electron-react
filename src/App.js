import logo from './logo.svg';
import './App.css';

import Router from './routers/Router';; // 引入路由配置文件

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router />
      </header>
    </div>
  );
}

export default App;
