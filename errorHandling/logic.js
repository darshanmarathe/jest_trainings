function Car({ name, model, company, HP, currentSpeed, currentGare }) {
  if (name == null || name == "") {
    throw Error("Oops car name cant be blank ");
  }
  if (model == null || model == "") {
    throw Error("Oops car model cant be blank ");
  }
  if (company == null || company == "") {
    throw Error("Oops car company cant be blank ");
  }
  this.name = name;
  this.model = model;
  this.company = company;
  this.HP = HP === undefined ? 800 : HP;
  this.MinSpeed = 0;
  this.MaxSpeed = this.HP / 10;
  this.Speed = 0;
  this.Tork = this.HP / 100;
  this.isSpeeding = false;
  setInterval(() => {
    if (this.isSpeeding) return;
    if (this.Speed - 10 < 0) {
      this.Speed = 0;
      return;
    } else {
      this.Speed -= 10;
    }
  }, 1000);

  this.Accelrate = milsec => {
    return new Promise((res, rej) => {
     if (this.HP > 10000) {
        //throw Error("Are you flying a sukhoi");  
       rej(Error("Are you flying a sukhoi"));
      }
      this.isSpeeding = true;
      let copy = milsec;
      let interval = setInterval(() => {
        this.Speed += this.Tork;
        if (this.Speed > this.MaxSpeed) {
          this.Speed = this.MaxSpeed;
        }
        copy--;
        if (copy === 0) {
          clearInterval(interval);
          res(true);
          this.isSpeeding = false;
        }
      }, 100);
    });
  };

  this.Breck = milsec => {
    return new Promise((res, rej) => {
      let copy = milsec;
      let interval = setInterval(() => {
        this.Speed -= copy * 5;
        copy--;
        if (copy === 0 || this.Speed <= 0) {
          this.Speed = 0;
          clearInterval(interval);
          res(true);
        }
      }, 100);
    });
  };
}

module.exports = Car;
