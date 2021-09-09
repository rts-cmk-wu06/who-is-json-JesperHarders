let team = [{
    "firstName": "Jesper",
    "lastName": "Harders", 
    "age": 20,
    "hairColor": "lightbrown",
    "shoeSize": 44
},{
    "firstName": "Thomas",
    "lastName": "Olsen",
    "age": 30,
    "hairColor": "lightbrown",
    "shoeSize": 43
},{
    "firstName": "Emil",
    "lastName": "Henriksen",
    "age": 26,
    "hairColor": "brown",
    "shoeSize": 39
},{
    "firstName": "Morten",
    "lastName": "Petersen",
    "age": 42,
    "hairColor": "darkbrown",
    "shoeSize": 41
}]

team.forEach(name => {
    console.log(name.firstName);
    console.log(name.lastName);
})