import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const playerVimeo = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer_current_time', JSON.stringify(seconds));
};

playerVimeo.on('timeupdate', throttle(onPlay, 1000));
playerVimeo.setCurrentTime(localStorage.getItem('videoplayer_current_time'));
