fetch('channels.m3u')
  .then(res => res.text())
  .then(data => {
    const lines = data.split('\n');
    const select = document.getElementById('channelList');
    let name = '';

    lines.forEach(line => {
      if (line.startsWith('#EXTINF')) {
        name = line.split(',')[1];
      }
      if (line.startsWith('http')) {
        const opt = document.createElement('option');
        opt.value = line.trim();
        opt.text = name;
        select.appendChild(opt);
      }
    });

    play(select.value);
    select.onchange = () => play(select.value);
  });

function play(url) {
  const video = document.getElementById('video');
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else {
    video.src = url;
  }
}
