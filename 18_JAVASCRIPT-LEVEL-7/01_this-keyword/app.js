const student = {
    name: "Aditya",
    age: 19,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got an avg marks = ${avg}`);
    }
}

function getAvg() {
    console.log(this);
}