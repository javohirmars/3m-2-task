var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },
    
    "Oybek": {
        name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },
    
    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }
}

function sumSalary(obj) {
    var sum = 0;
    
    for (var key in obj) {
        sum += obj[key].salary
    }
    
    return sum
}

function avarageAge(obj) {
    var avrAge = 0;
    
    for (var key in obj) {
        avrAge = ( avrAge + obj[key].age )
    }
    
    avrAge = avrAge / Object.keys(obj).length
    
    return avrAge
}

console.log(sumSalary(users));

console.log(avarageAge(users));

