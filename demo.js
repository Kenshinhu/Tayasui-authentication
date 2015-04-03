function session(){
    Object.defineProperty(this,'name',{value:"Kenshinhu"});
    Object.defineProperty(this,'id',{value:(new Date()).getTime()});

    return this;
}


console.log(session().name);
console.log(session().id);