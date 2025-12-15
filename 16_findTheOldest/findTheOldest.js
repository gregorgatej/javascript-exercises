const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return oldestPerson = people.reduce((oldest, currPerson) => {
        const ageOldest = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;
        
        const agePerson = (currPerson.yearOfDeath ?? currentYear) - currPerson.yearOfBirth;

        return ageOldest > agePerson ? oldest : currPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
