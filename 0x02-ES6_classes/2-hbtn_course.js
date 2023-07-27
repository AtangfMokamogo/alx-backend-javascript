export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(anotherName) {
    if (anotherName && typeof anotherName === 'string') {
      this._name = anotherName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(anotherLength) {
    if (typeof anotherLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = anotherLength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (newstudents && Array.isArray(newstudents)) {
      this._students = newstudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
