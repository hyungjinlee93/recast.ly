import VideoListEntry from './VideoListEntry.js';

console.log(VideoListEntry);

var VideoList = () => (
  <div className="video-list">
    <div><VideoListEntry></VideoListEntry></div>
    <div><VideoListEntry></VideoListEntry></div>
    <div><VideoListEntry></VideoListEntry></div>
    <div><VideoListEntry></VideoListEntry></div>
    <div><VideoListEntry></VideoListEntry></div>
  </div>
);
// mapp the above stuff so we get diff videos


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
