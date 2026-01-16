fetch('channels.m3u')
  .then(r => r.text())
  .then(playList => {
    // parse M3U8 & inject DOM
  });
