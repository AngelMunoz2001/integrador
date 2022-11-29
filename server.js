import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZsXttXhJ4RP4V7-pAoOSqHtADk_UVTsw",
  authDomain: "nutismart-b0488.firebaseapp.com",
  projectId: "nutismart-b0488",
  storageBucket: "nutismart-b0488.appspot.com",
  messagingSenderId: "527522699246",
  appId: "1:527522699246:web:de4588106fec394c76a0ff"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore()

//Inicializar el server
const app = express()

//Inizializar el Middleware
app.use(express.static('public'))
app.use(express.json())


//Ruta home
app.get('/',(req, res) =>{
    res.sendFile('index.html', {root: 'public'})
})

//Ruta login
app.get('/login',(req, res) =>{
  res.sendFile('login.html', {root: 'public'})
})

//Ruta registro
app.get('/signup',(req, res) =>{
  res.sendFile('signup.html', {root: 'public'})
})

//Arrancamos el server
const Port = process.env.PORT || 5000
app.listen(Port, () =>{
    console.log(`Server in Port: ${Port}`)
})