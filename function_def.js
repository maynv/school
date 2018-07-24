function personCreate ( number , prefix ){
    var personList = [];
    var varnamePrefix = prefix ;
    for ( let i=0 ;i < number ; i++ ){
        let randomNumber = parseInt( Math.random() * 9999 );
        let id=  varnamePrefix +  randomNumber;
        let firstName = "Tony";
        let lastName = "Dash"+ randomNumber ;
        let age = 22+ i;
        let gender = "Female";
        let newPerson = new person( id,  firstName , lastName , age , gender );
        personList.push (newPerson);
    }
    return personList;
}

