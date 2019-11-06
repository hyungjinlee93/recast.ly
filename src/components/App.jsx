import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: exampleVideoData,
      url: 'https://www.youtube.com/embed/' + exampleVideoData[0].id.videoId + '?autoplay=1',
      title: exampleVideoData[0].snippet.title,
      description: exampleVideoData[0].snippet.description
    };
  }

  handleClick(event) {
    this.setState({
      url: 'https://www.youtube.com/embed/' + event.currentTarget.id + '?autoplay=1',
      title: event.currentTarget.getElementsByClassName('video-list-entry-title')[0].innerText,
      description: event.currentTarget.getElementsByClassName('video-list-entry-detail')[0].innerText
    });
  }

  handleSubmit() {
    var value = $('.form-control').val();
    //need to get the value from the search  bar
    //pass in that value to youtube search
    var options = {
      key: YOUTUBE_API_KEY,
      query: value,
      max: 5
    };
    searchYouTube(options, (dataArr) => {
      console.log(dataArr.items);
      this.setState ({
        data: dataArr.items,
        url: 'https://www.youtube.com/embed/' + dataArr.items[0].id.videoId + '?autoplay=1',
        title: dataArr.items[0].snippet.title,
        description: dataArr.items[0].snippet.description
      });
      //data.items;
    });
    // console.log('pause');
    //need to do something with the state too


  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchFn={this.handleSubmit.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state}></VideoPlayer></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.data} fn={this.handleClick.bind(this)} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<VideoList />, )

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
