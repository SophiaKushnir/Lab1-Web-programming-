
const {sorter} = require('./task2')
const {theBig} = require('./task3');
const {mixer} = require('./task4');
const {calendar} = require('./task5');
const {calendar1} = require('./GetDays');
const {User} = require('./variable');
const {sortArray} = require('./task6');


// Task 1
let str = "Лабораторна робота з курсу програмування Web-додатків";
let newMas = str.split(' ');
console.log("Task 1:");
console.log(newMas);

// Task 2
console.log("\nTask 2:");
console.log(sorter("Program"));

// Task 3
console.log("\nTask 3:");
theBig(24, 56);

// Task 4
console.log("\nTask 4:");
mixer([6, -13, -13, 8, 11, 0, -3, -11, -2, 65, 32, 69, 17, 34, 96, -14]);

// Task 5
console.log("\nTask 5:");
calendar(2,1950);
calendar1(8);

// Task 6
console.log("\nTask 6:");
console.log(sortArray(User));

// Task 7
console.log("\nTask 7:");
class Port {
    constructor(number, name, pier) {
        this.number = number;
        this.name = name;
        this.pier = pier;
    }
}

class Ship {
    constructor(number, name, pier) {
        this.number = number;
        this.name = name;
        this.pier = pier;
    }

    info() {
        console.log(this)
    }
}

class pier {

    constructor(number, shipNumber, timeArrival, timeDeparture) {
        this.number = number;
        this.shipNumber = shipNumber;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}


let ports = [
    new Port(1, 'Port1', 1),
    new Port(2, 'Port2', 2),
    new Port(3, 'Port3', 3),
    new Port(4, 'Port4', 4),
    new Port(5, 'Port5', 5),
    new Port(6, 'Titanic', undefined)];

let ships = [
    new Ship(111, "Alaska", 2),
    new Ship(222, "Dolphin", 4),
    new Ship(333, "Canada", undefined),
    new Ship(444, "Medusa", 1),
    new Ship(999, "Infinity", 3),
    new Ship(555, "Secret", 5),
    new Ship(777, "Emma", 3),
    new Ship(888, "Dream", 3)];

let piers = [
    new pier(1, 999, new Date(2020, 2, 30), undefined),
    new pier(2, 777, new Date(2019, 12, 30), new Date(2020, 3, 17)),
    new pier(3, 333, new Date(2019, 8, 3), new Date(2019, 10, 28)),
    new pier(4, 222, new Date(2019, 4, 18), new Date(2019, 8, 14)),
    new pier(5, 444, new Date(2018, 6, 11), new Date(2019, 3, 3))];

let newPort = new Port(Math.round(Math.random()*20), "NewPort", undefined);

//Додавання нового порту
console.log('a)Додавання нового порту');
console.log(ports);
let addNewPort = (newPort) =>{
    ports.push(newPort);
};
addNewPort(newPort);
console.log("\n",ports);

// Редагування порту в колекції
console.log('\n b)Редагування порту в колекції')
let editPort = (port, newName, newpier) =>{
    port.name = newName;
    port.pier = newpier;
};
console.log(ports[0]);
editPort(ports[0], 'Elza', 6);
console.log("\n",ports[0]);

//Видалення першого порту
console.log('\n c)Видалення першого порту');
console.log(ports);
let delatePort = (ports) =>{
    ports.shift();
};
delatePort(ports);
console.log("\n",ports);

//Пошук одного порту в колекції
console.log('\nd)Пошук одного порту в колекції');
let findPortClass = (port) =>{
    let onePort;
    ports.forEach((value,index) => {
        if (value.name === port.name &&
            value.number === port.number &&
            value.pier === port.pier) onePort = value ;
    });
    console.log(`Наш порт: ${onePort.name} з номером ${onePort.number}`)
};
let somePort = new Port(6, 'Titanic', undefined);
findPortClass(somePort);

//Додавання корабля в колекцію
console.log('\ne)Додавання корабля в колекцію');
console.log(ships);
let someNewShip = new Ship(Math.round(Math.random()*999), "NewShip", undefined);
let addNewShip = (ship) =>{
    ships.push(ship)
};
addNewShip(someNewShip);
console.log("\n",ships);

// Редагування корабля в колекції
console.log('\nf)Редагування корабля в колекції');
let editShip = (ship, newName, pier) =>{
    ship.name = newName;
    ship.pier = pier;
};
console.log(ships[0]);
editShip(ships[0],'Makar',3);
console.log("\n",ships[0]);

//Видалення корабля з колекції
console.log('\ng)Видалення корабля з колекції');
console.log(ships);
let ShipForDell = new Ship(333, "Canada", undefined);
let delateShip = (ship) =>{
    ships.forEach((value,index, array) => {
        if(ship.number === value.number &&
        ship.name === value.name &&
        ship.pier === value.pier) array.splice(index, 1)
    })
};
delateShip(ShipForDell);
console.log("\n",ships);

//Пошук одного корабля в колекції
console.log('\nh)Пошук одного корабля в колекції');
let ShipforFind = new Ship(999, "Infinity", 3);
let findShipClass = (ship) =>{
    let oneShip;
    ships.forEach((value,index) => {
        if (value.name === ship.name &&
            value.number === ship.number &&
            value.pier === ship.pier) oneShip = value ;
    });
    console.log(`Наш корабель: ${oneShip.name} з номером ${oneShip.number}`)
};
findShipClass(ShipforFind);

//Додавання пристані до порту
console.log('\ni)Додавання пристані до порту');
let addPier = (port, pier) =>{
    if(port.pier) console.log(`Порт номер ${port.number} вже має пристань!`)
    else {
        port.pier = pier.number;
        console.log(`\nПорт номер ${port.number} тепер має пристань ${pier.number}!`)
    }
}
console.log(ports);
addPier(ports[4],piers[3]);
console.log(ports);

//Видалення пристані із порту
console.log('\nj)Видалення пристані із порту');
let deletePier = (port) =>{
    if(port.pier === undefined) console.log(`Порт з номером ${port.number} і так не має пристані!`);
    else {
        port.pier = undefined;
        console.log(`Порт з номером ${port.number} тепер не має пристані!`)
    }
};
console.log(ports);
deletePier(ports[5]);
console.log("\n",ports);

//Прибуття/Відбуття корабля від пристані
console.log('\nk)Прибуття/Відбуття корабля від пристані');
let timeShip = (ship, pier) =>{
    let timeArrival = pier.timeArrival;
    let timeDeparture = pier.timeDeparture;

    if(ship.pier === pier.number && timeArrival !== undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${pier.number} о ${timeArrival}, а відбув o ${timeDeparture}`);
    else if(ship.pier === pier.number && timeDeparture === undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${pier.number} о ${timeArrival}, але ще не відбув`);
    else if(ship.pier !== pier.number) console.log(`Корабель ${ship.name}
     не прибував на пристань номер ${pier.number}`);
};
timeShip(ships[6], piers[1]);

//Пошук усіх кораблів на пристані
console.log('\nl)Пошук усіх кораблів на пристані');
let findAllShips = (ships, pier) =>{
    let allShips = ships.filter(value => {
        return value.pier === pier.number;
    });
    if (allShips.length === 0) console.log('Кораблів на пристані немає!');
    else console.log(allShips);
};
findAllShips(ships, piers[2]);
