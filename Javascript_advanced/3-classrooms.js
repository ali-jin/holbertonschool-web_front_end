/**
 * Create a classroom with students seats.
 * @param {number} numbersOfStudents - The number of students in a classroom.
 * @returns {Array} - An array of student seat functions.
 */
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }

    let students = [];
    for (let index = 0; index < numbersOfStudents; index++) {
        students.push(studentSeat(index + 1));
    }
    return students;
}

const classRoom = createClassRoom(10);