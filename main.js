const img = document.querySelectorAll('.img')
const btn = document.querySelector('.btn')
const text = document.getElementById('text')

const items = ["Công nghệ phần mềm", "Tin học kinh tế", "Hệ thống thông tin", "Mạng máy tính", "Khoa học máy tính", "Công nghệ thông tin địa tin học", "Công nghệ phần mềm", "Tin học kinh tế", "Hệ thống thông tin", "Mạng máy tính", "Khoa học máy tính", "Công nghệ thông tin địa tin học", "Công nghệ phần mềm", "Tin học kinh tế", "Hệ thống thông tin", "Mạng máy tính", "Khoa học máy tính", "Công nghệ thông tin địa tin học"]
btn.onclick = () => {
  text.classList.remove('text_ani')
  text.innerHTML = null
  img[0].classList.add('animate')
  img[1].classList.add('animate')
  var item = items[Math.floor(Math.random()*items.length)]
  setTimeout(() => {
    text.classList.add('text_ani')
    text.innerHTML = item
    img[0].classList.remove('animate')
    img[1].classList.remove('animate')
  }, 3000)
}


