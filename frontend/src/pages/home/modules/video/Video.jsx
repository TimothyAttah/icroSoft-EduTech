import React from 'react';

const Video = () => {
  return (
    <div class='video'>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <div class='video_container_outer'>
              <div class='video_container'>
                <video
                  id='vid1'
                  class='video-js vjs-default-skin'
                  controls
                  data-setup='{ "poster": "images/video.jpg", "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://youtu.be/5_MRXyYjHDk"}], "youtube": { "iv_load_policy": 1 } }'
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
