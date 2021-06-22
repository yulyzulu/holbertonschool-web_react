var student1 = {
    firstName: 'Yulieth',
    lastName: 'Zuluaga',
    age: 29,
    location: 'Medellín'
};
var student2 = {
    firstName: 'Laura',
    lastName: 'Zuluaga',
    age: 27,
    location: 'Australia'
};
var studentsList = [student1, student2];
// Reference to the body element
var body = document.getElementsByTagName('body')[0];
// Create <table> element and <tbody> element
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tbody);
body.append(table);
//# sourceMappingURL=main.js.map