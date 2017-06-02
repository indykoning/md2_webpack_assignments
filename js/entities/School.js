import ClassRoom from "./classroom";

class School{
    constructor(){
    this.classRooms = [];
    }
    addClassRoom(classroomName){
this.classRooms.push(new ClassRoom(classroomName));
}
getClassRooms(){
        return this.classRooms;
}
getClassRoomByName(classroomName){
    for (let i = 0; i<this.classRooms.length; i++){
        if (this.classRooms[i].classroomName == classroomName){
            return this.classRooms[i];
        }
    }
    return undefined;
}
}

export default School;