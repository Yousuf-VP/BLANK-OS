const btn = document.getElementById('startbtn');
function home() {
  console.log(`directing to homescreen.(btn id ='startbtn')`);
    const lockscreen = document.getElementById('lockscreen');
  lockscreen.style.display = 'none';
  console.log('lockscreen display: none; set. Yousuf is cool');
  document.getElementById('homescreen');
  homescreen.style.display = 'block';

}


const timeElement = document.getElementById('clock');
console.log(`time element ok.`)

function updateTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();
  timeElement.textContent = currentTime;
  console.log(`time element printed ok.`)

  setTimeout(updateTime, 1000); // Update every 1 second
}

updateTime();
console.log(`time element updated ok.`)
function test() {
  const window = document.getElementById('window');
  window.style.display = 'block';
  const close = document.getElementById('close');
  close.onclick = () => {
    window.style.display = 'none';

}


}

