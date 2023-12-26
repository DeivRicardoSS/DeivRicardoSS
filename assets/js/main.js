const ativarMenu = document.getElementById("ativarMenu");
const conteudo = document.querySelector('.principal');
const tituloHeader = document.querySelector('header span');
document.querySelectorAll('nav ul li a').forEach(link => {
    link.onclick = function(e){
        e.preventDefault()

        
        fetch(link.href)
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
        tituloHeader.innerHTML = link.innerHTML;
        ativarMenu.checked = false;
    }
})