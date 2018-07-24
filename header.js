class person {
    constructor ( personID , firstName , lastName , age , gender ){
        this.personID = personID ;
        this.Name = {
            firstName , lastName 
        };
        this.Age = age ;
        this.Gender =  gender ;
        this.Position = null ;
        this.sayHello = function () {
            let msg =  "hello,  i am a person !"
            window.console.log(msg);
        }
        this.changeName = function (fullName) {
            var newName = fullName.split(" ");
            this.Name.firstName = newName[0] ;
            this.Name.lastName = newName[1];
        } 
    }
} 

class teacher extends person {
    constructor( personID ,firstName , lastName , age , gender , subject ){
        super(  personID , firstName , lastName , age , gender );
        // extends
        this.Subject = subject ;
    }
}

//
class superman extends person {
    constructor ( personID , firstName , lastName , age , gender , superPower){
        super( personID ,firstName , lastName , age , gender );
        // extends
        this.superPower = superPower ;
    }

}   
class classinSchool {
    constructor ( name , studentList , teacher ){
        // peroperties 
        this.Name = name ;
        this.studentList = studentList ;
        this.Teacher = teacher ;
        //  methods
        this.addNewstudent = function ( newStudent ){
            this.studentList.push(newStudent);
        }
    }
   // methods 
    get numofStudents(){
        return (this.studentList.length);
    } 
    set newName(newName){
        this.Name = newName ;
    }
}
class school {
    constructor ( name , personnel , listClass ){
         // properties
        this.Name = name ;
        this.personnel = personnel;
        this.listClass = listClass ;
    }
}



