const video=document.getElementById("video");
const channelBox=document.getElementById("channels");
const filter=document.getElementById("filter");
document.getElementById("ads-box").innerHTML = localStorage.getItem("ads") || "";

function loadChannel(url){
 if(Hls.isSupported()){
  const hls=new Hls(); hls.loadSource(url); hls.attachMedia(video);
 }else{ video.src=url; }
}

function render(list){
 channelBox.innerHTML="";
 list.forEach(ch=>{
  const d=document.createElement("div");
  d.className="channel"; d.innerText=ch.name;
  d.onclick=()=>loadChannel(ch.stream);
  channelBox.appendChild(d);
 });
}

filter.onchange=()=>{
 filter.value==="All"?render(channelData):
 render(channelData.filter(c=>c.category===filter.value));
};

render(channelData); loadChannel(channelData[0].stream);