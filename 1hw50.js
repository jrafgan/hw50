class Machine {
    constructor() {
        this.isTurn = false;
    }

    turnOff() {
        this.isTurn = false;
        console.log(`Machine is Off`);
    }

    turnOn() {
        this.isTurn = true;
        console.log(`Machine is on`);
    }
}

class HomeAppliance extends Machine {
    constructor() {
        super();
        this.isPlug = false;
    }

    plugIn() {
        this.isPlug = true;
        console.log(`Home Appliance is plugged in`);
    };

    plugOff() {
        this.isPlug = false;
        console.log(`Home Appliance is plugged Off`);
    }
}

class WashingMachine extends HomeAppliance {
    constructor() {
        super();
    }

    turnOn() {
        if (this.isPlug) this.isTurn = true;
    }

    run() {
        if (this.isPlug && this.isTurn) {
            console.log(`Washing machine is running`)
        }
    }
}

class LightSource extends HomeAppliance {
    constructor() {
        super();
    }

    setLevel(level) {
        if (level > 1 && level < 100) {
            this.level = level;
            console.log(`Light is turned On and Level is : ${level}`);
        } else {
            console.log(`Sorry, wrong Level`);
        }
    }
}

const bosch = new WashingMachine();
bosch.plugIn();
bosch.turnOn();
bosch.run();

const lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(60);
lightBulb.turnOn();

class AutoVehicle extends Machine{
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        let self = this;
    }
    setPosition(x, y) {
        self.x = x;
        self.y = y;
    }
}
class Car extends AutoVehicle {
    constructor() {
        super();
        this.speed = 10;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    setPosition(x, y) {
        super.setPosition(x, y);
    }

    run(a, b) {
        let s = 0;
        let self = this;
        let interval = function () {
            s += self.speed;
            let x1 = 0.6 * s + self.x;
            let y1 = 0.8 * s + self.y;
            console.log(`Car X =  ${x1} \nCar Y =  ${y1} \nPassed Way = ${s}`);
            if (x1 >= a || y1 >= b) {
                clearInterval(intervalID);
            }
        };
        let intervalID = setInterval(interval, 1000);
    }
}

let honda = new Car();
honda.setPosition(30, 40);
honda.turnOn();
honda.setSpeed(60);
honda.run(180, 240);
console.log(honda);
