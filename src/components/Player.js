import React from 'react';
import { Button, Icon, Menu } from 'semantic-ui-react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import '../App.css'
class Player extends React.Component {


  componentDidUpdate() {
    const {activeTrack, onNextTrack} = this.props
    if(activeTrack && !activeTrack.preview_url) {
      onNextTrack(activeTrack)
    }

    const event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': false
    })
    document.getElementsByClassName("music-button")[0].dispatchEvent(event)
  }

  onStartTrack(soundCloudAudio) {
    const playhead = document.getElementById("elapsed")
    const timeline = document.getElementById("slider")
    soundCloudAudio.progressInterval = setInterval(() => {
      const timelineWidth = timeline.offsetWidth
      const playPercent = timelineWidth * (soundCloudAudio.audio.currentTime / soundCloudAudio.audio.duration)
      playhead.style.width = playPercent + "px"
    }, 50);
  }

  onStopTrack(soundCloudAudio) {
    soundCloudAudio.progressInterval && clearInterval(soundCloudAudio.progressInterval)
    const playhead = document.getElementById("elapsed")
    playhead.style.width = 1 + "px"
  }

  onPauseTrack(soundCloudAudio) {
    soundCloudAudio.progressInterval && clearInterval(soundCloudAudio.progressInterval)
  }

  render() {
    const {activeTrack, onNextTrack, onPrevTrack} = this.props

    const EnhancedPlayer = withCustomAudio(props => {
      const {track} = props
      const trackTitle = track ? track.name : ''
      const artistName = track ? track.artists[0].name : ''
      const trackDuration = track ? track.duration_ms : ''
      // const albumCover = track ? track.album.images[0].url : ''
      return (
        <div className="player trailPlayer" >
            <div className="player-left">
              <h3 className="h3 nowrap caps flex-auto m0 trackTitle">
                {trackTitle ? trackTitle : ''}
              </h3>
              <h5 className="h4 nowrap caps flex-auto m0 artistName">
                {artistName ? artistName : ''}
              </h5>
            </div>

              <div className="button-items player-center">

                <div id="slider">
                  <div id="elapsed"></div>
                </div>

                <Timer
                  className="timer"
                  currentTime={trackDuration}
                  duration={trackDuration ? trackDuration / 1000 : 0}
                  {...props} />
              </div>
                <div className="controls player-right">
                  <Button icon={true}  onClick={() => {onPrevTrack(activeTrack)}} className="customControls">
                    <Icon name='step backward' />
                  </Button>
                  <PlayButton
                    id="playButton"
                    className="ui circular icon button play circle outline music-button"
                    {...props}/>
                  <Button className="customControls" icon={true} circular onClick={() => {onNextTrack(activeTrack)}}>
                    <Icon name='step forward' />
                  </Button>
                </div>
        </div>
      );
    });

    return (
      <Menu fixed='bottom' size="large" compact={true} className="player-menu">
        <EnhancedPlayer
          track={activeTrack ? activeTrack : null}
          streamUrl={activeTrack && activeTrack.preview_url ? activeTrack.preview_url : 'none'}
          onStartTrack={this.onStartTrack}
          onStopTrack={(soundCloudAudio) => {
            this.onStopTrack(soundCloudAudio)
            // auto play next track
            onNextTrack(activeTrack)
          }}
          
          onPauseTrack={this.onPauseTrack}
          onReady={this.onReady}
          preloadType="metadata" />
      </Menu>
    )
  }
}

export default Player;