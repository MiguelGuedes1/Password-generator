let slider=document.getElementById("slider")
let botao=document.getElementsByClassName("botao")[0]
let tamanhopass=document.getElementById("valor")
let password=document.getElementById("password")
let boxpass=document.getElementsByClassName("textopassword")[0]
password.innerHTML=''
let maiusculas=document.getElementById("verificarmaiusculas")
let minusculas=document.getElementById("verificarminusculas")
let numeros=document.getElementById("verificarnumeros")
let simbolos=document.getElementById("verificarsimbolos")

let novasenha=''

tamanhopass.innerHTML=slider.value

slider.oninput=function(){
    tamanhopass.innerHTML=this.value
}

 function clicarbotao(){

let caracterespossiveis = "";
    if (maiusculas.checked) {
        caracterespossiveis += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (minusculas.checked) {
        caracterespossiveis += "abcdefghijklmnopqrstuvxyz";
    }
    if (numeros.checked) {
        caracterespossiveis += "0123456789";
    }
    if (simbolos.checked) {
        caracterespossiveis += "<>.-+_!?*/#";
    }
let pass=''

    for(let i =0,n=caracterespossiveis.length;i<slider.value;i++){
             pass+=caracterespossiveis.charAt(Math.floor(Math.random() * n))     
        }
        boxpass.style.visibility = "visible";
        password.innerHTML=pass
        novasenha=pass
 }

 function copiarpass(){
    navigator.clipboard.writeText(novasenha)
    alert("Your password has been copied successfully")
 }
