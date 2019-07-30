import Person from './modules/person.es6';

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      alert(this.name);
    }
}

var friend = new Friend('Ryo');

friend.callName();