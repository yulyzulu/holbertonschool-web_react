import { seq } from 'immutable';

export default function printBestStudents(obj) {
  const filterByScore = seq(obj).filter((student) => student.score >= 70)
    .map((studentItem) => {
      const student = studentItem;
      student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1);
      student.lastName = student.lastName[0].toUpperCase + student.lastName.slice(1);
      return student.toJS;
    });
  console.log(filterByScore);
}
