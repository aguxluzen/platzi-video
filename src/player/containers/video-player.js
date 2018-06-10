import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import {formattedTime} from "../../utils";
import ProgressBar from '../components/progress-bar';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0
    };

    tooglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    };

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        });
    }

    handleLoadedMetadata = (event) => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration,
            formattedDuration: formattedTime(this.video.duration)
        })
    };
    
    handleTimeUpdate = (event) => {
        this.setState({
            currentTime: this.video.currentTime,
            formattedCurrentTime: formattedTime(this.video.currentTime)
        })
    };
    
    handleProgressChange = (event) => {
        this.video.currentTime = event.target.value;
    };
    
    render() {
        return (
            <VideoPlayerLayout>
                <Title
                    title="Esto es un video"
                />

                <VideoPlayerControls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.tooglePlay}
                    />
                    <Timer
                        duration={this.state.formattedDuration}
                        currentTime={this.state.formattedCurrentTime}
                    />
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                </VideoPlayerControls>

                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;