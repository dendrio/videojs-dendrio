/*! videojs-plugin - v0.0.0 - 2015-01-24 */

(function(vjs) {
  dendrioSeeker = function() {
    var player = this;

    // called when user seeks to start video after pause
    player.on('play', function() {
        console.log('Playing from second: ' + player.currentTime());
    });

    // called when user seeks
    player.on('pause', function() {
        var seek_to_time = player.currentTime();
        console.log('Seeking to ' + seek_to_time);

        // dendrio logic here for:
        //  - figuring out byterange corresponding to seek_to_time
        //  - download byterange
        //  - feed new bytes into videojs
        //  - resume play
    });
  };

  vjs.plugin('dendrioSeeker', dendrioSeeker);

}(window.videojs));