const findTheOldest = function(people) {
    const oldestName = people
        .map(person =>{
            if(person.yearOfDeath==undefined) {
                person.yearOfDeath= new Date().getFullYear();
            }
            return person;
        })
        .map(person =>{
            return{
                name: person.name,
                age: person.yearOfDeath - person.yearOfBirth
            };
        })
        .sort((a,b) =>a.age>b.age ? -1 : 1)
        .shift();

        return oldestName;
    };

// Do not edit below this line
module.exports = findTheOldest;
