




function kjopBilett() {
    const kjopteBiletter = [];
    let ut = "";

    const innFilm = document.getElementById("filmer").value;

    const antall = document.getElementById("antall").value;
    const errorAntall = document.getElementById("errorAntall").value;

    const fornavn = document.getElementById("fornavn").value;
    const errorFornavn = document.getElementById("errorFornavn").value;

    const etternavn = document.getElementById("etternavn").value;
    const errorEtternavn = document.getElementById("errorEtternavn").value;


    const telefonnr = document.getElementById("telefonnr").value;
    const errorTelefonnr = document.getElementById("errorTelefonnr").value;

    const epost = document.getElementById("epost").value;
    const errorEpost = document.getElementById("errorEpost").value;



    if (antall <= 0 || isNaN(antall)) {
        errorAntall.innerHTML= "Du må kjøpe 1 eller flere biletter";
        return;
    }


}