 const persone = {
    "nome" : ["wayne barrett" , "angela Caroll" , "Gordon Freeman" , "Angela Lopez" , "Scott Estrada" , "Barbara Ramos"] ,

    "professione": ["Founder & CEO", "Chief Editor" , "Office Manager" , "Social Media Manager" , "Developer" , "Graphic Designer"]

};
for (let i = 0; i < 6; i++) {
    let nomisequenziali = persone.nome[i];
    console.log(nomisequenziali);
    
}
for (let i = 0; i < 6; i++) {
    let jobsequence  = persone.professione[i];
    console.log(jobsequence);
    
}