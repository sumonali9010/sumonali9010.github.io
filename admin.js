if(localStorage.getItem("admin")!=="true"){location.href="login.html";}
let channels=JSON.parse(localStorage.getItem("channels"))||[];
function addChannel(){
 channels.push({name:name.value,stream:url.value,category:cat.value});
 localStorage.setItem("channels",JSON.stringify(channels)); show();
}
function saveAds(){ localStorage.setItem("ads",adtext.value); alert("Saved");}
function show(){
 list.innerHTML=""; channels.forEach(c=>{list.innerHTML+=`<div>${c.name} (${c.category})</div>`});
}
show();