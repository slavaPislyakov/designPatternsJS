const car = {
  wheels: 1,

  unit() {
    console.log(`This car has ${this.wheels} and car's owner is ${this.owner}`)
  }
};


const carWithOwner = Object.create(car, {
  owner: {
    value: 'Vyacheslav'
  }
});


carWithOwner.unit();

// check that carWIthOwnere has prototype equal to car

console.log(carWithOwner.__proto__ === car);
