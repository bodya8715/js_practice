/* Задача №1 */

function getSum(n) {
    let result = 0;

    for(let i = 1; i <= n; i++) {
        result+=i;
    }

    return result;
}

/* Задача №2 */

/* Задача №2.2 */
const university = {
    title: "Great Wasington University",
    faculty: "Faculty of Energy",
    department_of_the_university: "Department of Wind Energy",
};

/* Задача №2.1 */
const student = {
    firstName: "firstName",
    lastName: "lastName",
    isMale: true,
    сontact_details: {
        e_mail: "firstName_lastName@gmail.com",
        telephone_number: 2351234234234234,
        address: "Washinton Street 12"
    },
    university: university.title,
    faculty: university.faculty,
    department_of_the_university: university.department_of_the_university,
    showInfo(object) {
        if(!object) {
            for(let item in this) {
                if (typeof this[item] === "object") {
                    this.showInfo(this[item]);
                } else {
                    console.log(`${item} - ${this[item]}`);
                }
            }
        } else {
            for(let item in object) {
                if (typeof object[item] === "object") {
                    this.showInfo(object[item]);
                } else {
                    console.log(`${item} - ${object[item]}`);
                }  
            }
        }
    }
};

Object.defineProperty(student, 'showStudentInfo', {enumerable: false});

/* Задача №3.1 */

function getArray(n) {
    const array = [];

    for(let i = 0; i < n; i++) {
        array.push(Math.random());
    }

    return array;
}

/* Задача №3.2 */

function getEvenIndexNumbers(array) {
    array.forEach(function(item, index) {
        if(index %2 === 0) {
            console.log(item);
        }
    });
}

/* Задача №3.3 */

function getEvenNumbers(array) {
    for(let element of array) {
        if(item %2 === 0) {
            console.log(item);
        }
    }

}

/* Задача №3.4 */

function getIndexOfZeroNumbers(array) {
    array.forEach(function(item, index) {
        if(item === 0) {
            console.log(index);
        }
    });
}

/* Задача №3.5 */

function zeroElementCounter(array) {
    let counter = 0;

    for(let element of array) {
        if( element === 0) {
            counter++;
        }
    }

    return counter;
}

/* Задача №4 */

class Book {
    constructor(author, title, publication_date, publishing_house) {
        this.author = author;
        this.title = title;
        this.publication_date = publication_date;
        this.publishing_house = publishing_house;
    }
}

class E_Book {
    constructor(author, title, publication_date, publishing_house, file_extension, e_number) {
        this.author = author;
        this.title = title;
        this.publication_date = publication_date;
        this.publishing_house = publishing_house;
        this.file_extension = file_extension;
        this.e_number = e_number;
    }
}

/* Задача №5 */

function getNumbers(n) {
    for(let i = 1; i <= n; i++) {
        if( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log('fizzbuzz');
            continue;
        }

        if (i % 3 === 0) {
            console.log('fizz');
            continue;
        }

        if (i % 5 === 0) {
            console.log('buzz');
            continue;
        }

        console.log(i);
    }
}

console.log(getNumbers(20));

