
var nameofBG = "BG01";
var listStudentofBG = personCreate( 22, "TC" );
var teacherofBG = new teacher( "TC01" , "John" , "Smith" , 33 , "Male" , "Math")
var classBG = new classinSchool( nameofBG , listStudentofBG , teacherofBG );

// /
var personnel = [] ;
var listClass = [] ;
var listSchool = [];
var superMan = new superman( "S001", "Clark" , " " , 33 , "Male" , [ "fly" , "runFast" ] );
personnel.push(superMan);
listClass.push(classBG);

 var newSchool0 = new school("University of Engineering and Technology" , personnel ,  listClass);
 var newSchool1 = new school("University of Education" , personnel ,  listClass);
 var newSchool2 = new school("University of Industry" , personnel ,  listClass);
 var newSchool3 = new school("University of Engineering and Technology" , personnel ,  listClass);
 var newSchool4 = new school("University of Education" , personnel ,  listClass);
 var newSchool5 = new school("University of Industry" , personnel ,  listClass);
 var newSchool6 = new school("University of Engineering and Technology" , personnel ,  listClass);
 var newSchool7 = new school("University of Education" , personnel ,  listClass);
 var newSchool8 = new school("University of Industry" , personnel ,  listClass);

 listSchool.push(newSchool0);
 listSchool.push(newSchool1);
 listSchool.push(newSchool2);
 listSchool.push(newSchool3);
 listSchool.push(newSchool4);
 listSchool.push(newSchool5);
 listSchool.push(newSchool6);
 listSchool.push(newSchool7);
 listSchool.push(newSchool8);   
// window.console.log(newSchool);
function showInformation(obj){
    $("#name").text(obj.Name);
}
//
$(document).ready(function(){

    // display school list
    for( let i = 0 ; i < listSchool.length ;i++) {
        let id = 'id="school'+ i +'"';
        let index = 'index="'+i+ '"';
        let style = 'style=" cursor : '+ 'pointer' + '"' ;
        let msg = '<li class="list-group-item" ' + id + index + style +'>'+ listSchool[i].Name + "</li>" ;
     //   window.console.log(msg);
        $("ul").append(msg);
    }
    $("ul").children().click(function(){
        $("#main-container").css("display","block");
        showInformation(listSchool[this.id.split("school")[1]]);
    });
    
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});