interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreack(): string;
  workDirectorTask(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreack(): string;
  workTeacherTask(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreack(): string {
    return 'Getting a coffee break';
  }
  workDirectorTask(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreack(): string {
    return 'Cannot have a break';
  }
  workTeacherTask(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
