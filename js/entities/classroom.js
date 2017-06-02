import Student from "./student";
class ClassRoom{
    constructor(classroomName = undefined){
        this.classroomName = classroomName;
        this.students = [];

    }
    addStudent(firstname, lastname, age){
        return this.students.push(new Student(firstname, lastname, age));
    }
    getStudent(id){
        return this.students[id];
    }
    getAllStudents(){
        return this.students;
    }

}
export default ClassRoom;