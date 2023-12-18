let files = [
  "C:\\Users\\user\\Desktop\\web_20190048_박호진\\image\\myunranmayo.jpg",
    "C:\\Users\\user\\Desktop\\web_20190048_박호진\\image\\kimchnabe.jpg",
    "C:\\Users\\user\\Desktop\\web_20190048_박호진\\image\\myoranpasta.jpg",
    "C:\\Users\\user\\Desktop\\web_20190048_박호진\\image\\ankimo.jpg",
    "C:\\Users\\user\\Desktop\\web_20190048_박호진\\image\\rice.jpg"
  ];
let imgs = new Array();
for (let i=0; i<files.length; i++) {
  imgs[i] = new Image();
  imgs[i].src = files[i];
}

let next = 1;
function change(img) {
  img.src = imgs[next].src;
  next++;
  next %= imgs.length;
}

function drawImage() {
  let radios = document.getElementsByName("theme");
  let img = document.getElementById("cookimage");

  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          img.src = radios[i].value;
          break;
      }
  }
}

function scheduleAppointment() {
  var name = document.getElementById('appointmentName').value;
  var date = document.getElementById('appointmentDate').value;
  var time = document.getElementById('appointmentTime').value;
  var place = document.getElementById('appointmentPlace').value;

  alert('🎉 ' + name + '님과 쿠킹클래스의 약속이 잡혔습니다! 🎉\n' +
        '늦지 않게 도착해주시길 바랍니다.\n' +
        '날짜: ' + date + '\n시간: ' + time + '\n장소 : ' + place);
}
