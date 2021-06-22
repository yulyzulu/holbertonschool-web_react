interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Yulieth',
  lastName: 'Zuluaga',
  age: 29,
  location: 'Medellín'
};
const student2: Student = {
  firstName: 'Laura',
  lastName: 'Zuluaga',
  age: 27,
  location: 'Australia'
};

const studentsList: Array<Student> = [student1, student2];

// Reference to the body element
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

// Create <table> element and <tbody> element
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');


studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableDataCellElement = row.insertCell(0);
  const cell2: HTMLTableDataCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);