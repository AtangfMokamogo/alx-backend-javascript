export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._lenth;
  }

  get students() {
    return this._students;
  }

  set name(anotherName) {
    if (anotherName && typeof anotherName === 'string') {
      this._name = anotherName;
    }
  }

  set length(anotherLength) {
    if (anotherLength && typeof anotherLength === 'number') {
      this._length = anotherLength;
    }
  }

  set students(newstudents) {
    if (newstudents && Array.isArray(newstudents)) {
      this._students = newstudents;
    }
  }
}
