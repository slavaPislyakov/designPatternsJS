class OldCalc {
  operations(method, t1, t2) {
    switch (method) {
      case 'add': return t1 + t2;
      case 'sub': return t1 - t2;
      default: return NaN
    }
  }

}


class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }

  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }

  operations(method, t1, t2) {
    switch (method) {
      case 'add': return this.calc.add(t1, t2);
      case 'sub': return this.calc.sub(t1, t2);

      default: return NaN;
    }
  }
}


const oldCalc = new OldCalc();
console.log(oldCalc.operations('add', 15, 20));
console.log(oldCalc.operations('sub', 15, 20));

const newCalc = new NewCalc();
console.log(newCalc.add(15, 20));
console.log(newCalc.sub(15, 20));

const calcAdapter = new CalcAdapter();
console.log(calcAdapter.operations('add', 15, 20));
console.log(calcAdapter.operations('sub', 15, 20));
