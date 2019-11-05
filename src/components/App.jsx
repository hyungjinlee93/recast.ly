import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><Search></Search></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><VideoPlayer></VideoPlayer></div>
      </div>
      <div className="col-md-5">
        <div><VideoList></VideoList></div>
      </div>
    </div>
  </div>
);

// ReactDOM.render(<VideoList />, )

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
