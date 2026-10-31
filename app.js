
//function
(function(name){
console.log('hello ' + name)
}('Taha'))
let person = {
  name: 'Mohammad' ,
  age : 14 ,
  city: 'Anzali' ,
  great : function(){
    return `hello ${this.name}`
  }
}
console.log(person.great())

