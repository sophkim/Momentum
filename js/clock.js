//메인 화면 시계

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // padStart는 string에만 적용되므로 시간 숫자를 문자로 변환: String()
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// interval: 0초마다
// setInterval(sayHello, 3000);

// setTimeout: 0초 후에
// setTimeout(sayHello, 3000);

// padStart: 2자리 이하면 0으로 앞을 채움
// "1".padStart(2,"0")

// padEnd: 2자리 이하면 0으로 뒤를 채움
// "1".padEnd(2,"0")
