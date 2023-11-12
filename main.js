 const persone = {
    nome :["wayne barrett" , "angela Caroll" , "Gordon Freeman" , "Angela Lopez" , "Scott Estrada" , "Barbara Ramos"] ,

    professione : ["Founder & CEO", "Chief Editor" , "Office Manager" , "Social Media Manager" , "Developer" , "Graphic Designer"]

};
for (let nome in persone){
    console.log(persone[nome]);
    let identity = document.getElementById("identita").innerText =(persone[nome]);
}