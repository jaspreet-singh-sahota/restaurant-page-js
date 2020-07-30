import videoLink from './background.mp4';

const backgroundVideo = (() => {
  const divVideoContainer = document.createElement('div');
  const divColorOverlay = document.createElement('div');
  const video = document.createElement('video');
  const source = document.createElement('source');
  divVideoContainer.setAttribute('class', 'video-container');
  divColorOverlay.setAttribute('class', 'color-overlay');
  video.setAttribute('muted', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('loop', '');
  video.style.width = '100%';
  source.setAttribute('src', videoLink);
  source.setAttribute('type', 'video/mp4');

  video.appendChild(source);
  divColorOverlay.appendChild(video);
  divVideoContainer.appendChild(divColorOverlay);

  video.muted = true;
  video.play();

  return divVideoContainer;
})();

export default backgroundVideo;