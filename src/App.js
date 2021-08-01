import { Link, Route } from 'react-router-dom';
import './App.css';

const Homepage = (props) => {
  console.log(props)
  return(
    <div>
      <Link to='/topics'>Topics</Link>
      <br></br>
      <br></br>
      <button onClick={() => props.history.push('/topics')}>To Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  )
}

const Topicspage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Topics PAGE</h1>
      <Link to={`${props.match.url}/13`}>13</Link>
      <br></br>
      <br></br>
      <Link to={`${props.match.url}/14`}>14</Link>
      <br></br>
      <br></br>
      <Link to={`${props.match.url}/15`}>15</Link>
    </div>
  )
}

const Detailpage = (props) => {
  console.log(props)
  return(
  <div>
    <h1>Topic Details: {props.match.params.topicId}</h1>
  </div>
  )
  }

function App() {
  return (
    <div>
      {/* <Switch> */}
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/topics' component={Topicspage}></Route>
        <Route exact path='/topics/:topicId' component={Detailpage}></Route>
    {/* </Switch> */}
    </div>
 
  );
}

export default App;
