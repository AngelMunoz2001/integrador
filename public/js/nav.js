
//Obtener la etiqueta para el menu+++
const  nabar = document.querySelector('.navbar')

window.addEventListener('scroll', () =>{
    if(screenY >= 180){
        navbar.classList.add('bg')
    }else{
        navbar.classList.remove('bg')
    }
})

const createNavbar = () =>{
    nabar.innerHTML +=
    `
        <ul class="links-container">
            <li class="link-item">
            <a href="#" class="link">Home</a>
            </li>

            <li class="link-item">
            <a href="#" class="link">Products</a>
            </li>

            <li class="link-item">
            <a href="#" class="link">About</a>
            </li>

            <li class="link-item">
            <a href="#" class="link">Contact</a>
            </li>
        </ul>

        <div class="user-interactions">
            <div class="user">
                <img src="./img/user.png" class="user-icon">
                <div class="user-icon-popup">
                    <p>login to your account</p>
                    <a>login</a>
                </div>
            </div>
        </div>
    `
}

createNavbar()

let userIcon = document.querySelector('.user-icon')
let userPopupIcon = document.querySelector('.user-icon-popup')

userIcon.addEventListener('click', () =>{
    userPopupIcon.classList.toggle('active')
})

let text = userPopupIcon.querySelector('p')
let btnLogin = userPopupIcon.querySelector('a')

let user = JSON.parse(sessionStorage.user || null)
if(user == null){
    text.innerHTML = 'Login to you account'
    btnLogin.innerHTML = 'Login'
    btnLogin.addEventListener('click', () =>{
        location.href = '/login'
    })
}
