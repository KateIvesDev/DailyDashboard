
window.addEventListener('load', geoFindMe)
const clock = document.getElementById('clock')
const nameInput = document.getElementById('name')
const greetingLine = document.getElementById('greetingLine')
const currentName = localStorage.getItem('name')
nameInput.addEventListener('input', updateName)
nameInput.addEventListener('focusout', hideInput)

function currentTime(){
  let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()

  if(hh === 0){
    hh = 12;
  }
  if(hh > 12){
    hh = hh - 12;
 }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
 
  let time = hh + ":" + mm 
  clock.innerText = time

  let t = setTimeout(function() {currentTime()}, 1000)
}

currentTime()


function greeting(){
  if (currentName){
    greetingLine.textContent = `Hello ${currentName}`
  }
}

function updateName(e){
  let userName = e.target.value
  localStorage.setItem('name', userName)
}
function hideInput(){
  if(currentName.length > 1){
    nameInput.type = 'hidden';
  }
  greeting()
}

function geoFindMe() {

  const status = document.querySelector('#status');
  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
