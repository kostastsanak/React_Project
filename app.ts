export{};

var msg = 'Hello World';
console.log(msg);

function welcomePerson(person:Person){
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return 'Hey ${Person.firstName} ${Person.lastName}';
}

const james = {
    firstName: "James",
    lastName: "Quick"
}

welcomePerson(james);

interface Person {
    firstName: string,
    lastName: string
}