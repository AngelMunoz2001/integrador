//Obtener la etiqueta para el menu+++
const  nabar = document.querySelector('.navbar')

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