import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timeVideo(obj) {
  const time = obj.seconds;
  //   console.log(time);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

const secondsVideo = localStorage.getItem('videoplayer-current-time');
// console.log(secondsVideo);

player.on('timeupdate', throttle(timeVideo, 1000));
player.setCurrentTime(secondsVideo);
