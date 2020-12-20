let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let tableau1 =  tableauUn.map(x => x ** 2);
let tableau2 = tableauUn.map(x => x * 10);
let tableau3 = tableauUn.map(x =>(x+2)/19);

let tableau4 = tableauUn.filter(x => x>2);
console.log(tableau4);

let tableau5 = tableauUn.filter(x => (x%2 === 0));
console.log(tableau5);

let tableau6 = tableauUn.filter(x => x*3 > 10)
console.log(tableau6);

let tableau7 = tableauDeux.map(x => x.length);
console.log(tableau7)

let tableau8 = tableauDeux.map(x => "lelement " + x + " a une longueur de " + x.length);
console.log(tableau8)

let tableau9 = tableauDeux.map(x => x+x);
console.log(tableau9);

let tableau10 = tableauDeux.filter(x => x.length > 4)
console.log(tableau10);

let tableau11 = tableauDeux.filter(x => x.length % 2 === 0);
console.log(tableau11);

let tableau12 = tableauDeux.filter(x => x.length - 3 > 10);
console.log(tableau12);