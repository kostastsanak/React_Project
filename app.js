"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msg = 'Hello World';
console.log(msg);
function welcomePerson(person) {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return 'Hey ${Person.firstName} ${Person.lastName}';
}
const james = {
    firstName: "James",
    lastName: "Quick"
};
welcomePerson(james);
