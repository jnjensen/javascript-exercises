function ageFind (person){
    if (person.hasOwnProperty("yearOfDeath") == true){
        return ((person.yearOfDeath)-(person.yearOfBirth));
    } else{
        var d = new Date();
        var curYear = d.getFullYear();
        return (curYear - (person.yearOfBirth));
    }
}

let findTheOldest = function(people) {
    var per1 = people[0];
    var per1Age = ageFind(per1);
    var per2 = people[1];
    var per2Age = ageFind(per2);

    for (i = 2; i < people.length; i++){
        if (per1Age > per2Age){
            per2 = people[i];
            per2Age = ageFind(per2);
        } else{
            per1 = people[i];
            per1Age = ageFind(per1);
        }
    }

    if (per1Age > per2Age){
        return per1;
    } else{
        return per2;
    }
}

module.exports = findTheOldest
