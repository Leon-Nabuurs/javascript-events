const idee = document.querySelectorAll('p');

idee.forEach(ideetje =>
{
    console.log(ideetje);
    ideetje.addEventListener('mouseover', function (e) {
        console.log(ideetje.parentNode);
        console.log(ideetje.parentElement);
        console.log(ideetje.childElementCount);
        console.log(ideetje.firstChild);
        console.log(ideetje.firstElementChild);

        ideetje.innerHTML = "Helemaal klaar";
    });
}
)



