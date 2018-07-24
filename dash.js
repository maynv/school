
var nameofBG = "BG01";
var listStudentofBG = personCreate( 22, "TC" );
var teacherofBG = new teacher( "TC01" , "John" , "Smith" , 33 , "Male" , "Math")
var classBG = new classinSchool( nameofBG , listStudentofBG , teacherofBG );

// /
var personnel = [] ;
var listClass = [] ;
var superMan = new superman( "S001", "Clark" , " " , 33 , "Male" , [ "fly" , "runFast" ] );
personnel.push(superMan);
listClass.push(classBG);

 var newSchool = new school("University of Engineering and Technology" , personnel ,  listClass);

window.console.log(newSchool);