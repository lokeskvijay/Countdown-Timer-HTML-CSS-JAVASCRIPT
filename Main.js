const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const second = document.querySelector("#seconds");

function final() {
  const year = new Date().getFullYear();
  const date = new Date();
  const setYear =new Date(`January 1 ${year + 1} 00:00:00 `)
  const diff = setYear-date;
  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor((diff/1000/60/60)%24);
  const m = Math.floor((diff/1000/60)%60);
  const s = Math.floor((diff/1000)%60);

days.innerHTML = d<10?"0"+d:d;
hours.innerHTML = h<10?"0"+h:h;
minutes.innerHTML = m<10?"0"+m:m;
second.innerHTML = s<10?"0"+s:s; 
}
setInterval(final,1000)