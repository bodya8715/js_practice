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


/* Advanced level */

function isString(string) {
    if(typeof string === 'string') {
        return string;
    }

    throw new TypeError('Invalid data type');
}

function isNumber(number) {
    if(isNaN(number) || typeof number !== 'number') {
        throw new TypeError('Invalid data type');
    }

    return number;
}

function isBoolean(value) {
    if(typeof value === 'boolean') {
        return value;
    }

    throw new TypeError('Invalid data type');
}

function isEmail(string) {
    if(isString(string) && string.includes("@")) {
        return string;
    }

    throw new TypeError('Invalid data type');
}

class University {
    constructor(university_title, university_faculty, department_of_the_university) {
        this.university_title = university_title;
        this.university_faculty = university_faculty;
        this.department_of_the_university = department_of_the_university;
    }

    get university_title() {
        return this._university_title;
    }

    set university_title(name) {
        this._university_title = isString(name);
    }

    get university_faculty() {
        return this._university_faculty;
    }

    set university_faculty(name) {
        this._university_faculty = isString(name);
    }

    get department_of_the_university() {
        return this._department_of_the_university;
    }

    set department_of_the_university(name) {
        this._department_of_the_university = isString(name);
    }
}

let u = new University("f","f","f");

class Contact_details {
    constructor(e_mail, telephone_number, address) {
        this.e_mail = e_mail;
        this.telephone_number = telephone_number;
        this.address = address;
    }

    get e_mail() {
        return this._e_mail;
    }

    set e_mail(string) {
        this._e_mail = isEmail(string);
    }

    get telephone_number() {
        return this._telephone_number;
    }

    set telephone_number(value) {
        this._telephone_number = isNumber(value);
    }

    get address() {
        return this._address;
    }

    set address(string) {
        this._address = isString(string);
    }
}

class Student extends University {
    constructor(
            university_title, university_faculty, department_of_the_university, 
            firstName, lastName, dateOfApplication, isMale, e_mail, telephone_number, address) {
        super(university_title, university_faculty, department_of_the_university);
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfApplication = dateOfApplication;
        this.isMale = isMale;
        this.contact_details = new Contact_details(e_mail, telephone_number, address);
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(name) {
        this._firstName = isString(name);
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(name) {
        this._lastName = isString(name);
    }

    get dateOfApplication() {
        return this._dateOfApplication;
    }

    set dateOfApplication(dateOfApplication) {
        if( typeof dateOfApplication !== 'string' && ( typeof dateOfApplication !== 'number' || isNaN(dateOfApplication) ) ) {
            throw new TypeError("Invalid data type");
        }

        if( 
            ( new Date(dateOfApplication) > new Date() ) ||
            ( (Math.floor((new Date() - new Date(dateOfApplication))/(365*24*3600*1000)) + 1) > 5 )
        ) {
            throw RangeError("Invalid data range");
        }

        if(!this.dateOfApplication) {
            this._dateOfApplication = new Date(dateOfApplication);
        }
    }

    get isMale() {
        return this._isMale;
    }

    set isMale(value) {
        this._isMale = isBoolean(value);
    }

    get course() {
        return Math.floor((new Date() - this.dateOfApplication)/(365*24*3600*1000))+1;
    }

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
}

const s = new Student("f", "f", "f", "f", "f", '2019-09-01T00:00:00.000', true, "m@m", 234234, "f");
