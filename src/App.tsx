import './App.scss';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Store from './store'
import { observer } from "mobx-react"
import { useState } from 'react';

function App() {
  const [store] = useState(() => new Store())

  return (
    <div className="App">
      <Nav/>
      <Home categories={store.categories} blocks={store.blocks}/>
    </div>
  );
}

export default observer(App);