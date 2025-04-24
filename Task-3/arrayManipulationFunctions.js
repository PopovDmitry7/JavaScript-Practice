const team = [
    { id: 1, name: "Alice", role: "Developer", age: 25 },
    { id: 2, name: "Bob", role: "Designer", age: 30 },
    { id: 3, name: "Charlie", role: "Manager", age: 35 },
];

function addTeamMember(person) {
    team.push(person);
}

function updateTeamMember(personId, property, value) {
    let personIndex = team.findIndex((person) => person.id == personId);
    team[personIndex][property] = value;
}

function sortTeamMembers(property) {
    if(!Object.hasOwn(team[0], property) || !property)
        throw new Error("There is no such property");

    if(typeof team[0][property] === 'string')
        return team.slice(0).sort((a, b) => {
            return a[property].toLowerCase().localeCompare(b[property].toLowerCase());
        });
    
    if(!isNaN(team[0][property]))
        return team.slice(0).sort((a, b) => {
            return a[property] - b[property];
        });
    
    throw new Error("Unknown sort value type :(");
}

addTeamMember({ id: 4, name: "Anton", role: "Developer", age: 26 });
updateTeamMember(4, "age", 27);
console.log(sortTeamMembers('name'));