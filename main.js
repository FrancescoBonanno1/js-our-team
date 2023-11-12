 const persone = {
    nome :["wayne barrett" , "angela Caroll" , "Gordon Freeman" , "Angela Lopez" , "Scott Estrada" , "Barbara Ramos"] ,

    professione : ["Founder & CEO", "Chief Editor" , "Office Manager" , "Social Media Manager" , "Developer" , "Graphic Designer"]

};
for (let professione in persone){
    console.log(persone.professione);
    let position = document.getElementById("posizione").innerText =(persone[professione]);
}
for (let nome in persone){
    console.log(persone.nome);
    let name = document.getElementById("nome").innerText =(persone.nome);
}