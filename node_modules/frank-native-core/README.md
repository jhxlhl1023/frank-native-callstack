

# frank-native-core



## Usage
Redesign the management about JavaScript prototype chain inheritance,Make every instance has independent prototype chain.
In other words:make inheritance like Java.
###Orignal oop code:
function ClassA(){
 
    var data;
 
    this.getData = functin(){
 
        return data;
 
    };
 
    this.setData(arg){
 
        data = arg;
 
    };
 
};

  
function ClassB(){};
 
ClassB.prototype = new ClassA();
 
function ClassC(){};
 
ClassC.prototype = new ClassC();
 
var b = new ClassB();
 
var c = new ClassC();
 
b.setData("b");
 
c.setData("c");
 
console.log("b:"+b.getData());//"b:c",X
 
console.log("c:"+c.getData());//"c:c",V
 
###Now oop code
 
  const Frank = require("require");
 
  const ClassA = Frank.buildType("SuperClass").classBody(function(){
 
    var data;
 
    this.getData = functin(){
 
        return data;
 
    };
 
    this.setData(arg){
 
        data = arg;
 
    };
 
}).toClass();
 
const ClassB = Frank.buildType("ClassB").extendsFrom(ClassB).toClass();
 
const ClassC = Frank.buildType("ClassC").extendsFrom(ClassC).toClass();
 
var b = Frank.newInstance(ClassB);//or ClassB.newInstance() or new ClassB();
 
var c = Frank.newInstance(ClassC);//or ClassC.newInstance() or new ClassC();
 
b.setData("b");
 
c.setData("c");
 
console.log("b:"+b.getData());//"b:b",V
 
console.log("c:"+c.getData());//"c:c",V
 
## Developing
 
const Frank = require("frank-native-core");
 
const SuperClass = function () {};
 
const Person = Frank.buildType("Person").extendsFrom(SuperClass).classBody(function () {
 
    this.name = Frank.FrankUtils.getter_setter();
 
    this.age = Frank.FrankUtils.getter_setter();
 
    this.job = Frank.FrankUtils.abstract4override;
 
    this.say = function () {
 
        return "I am a " + this.job() + ", " + this.name() + " , " + this.age() + " year-old.";
 
    };
 
}).toClass();
 
const Student = Frank.buildType("Student").extendsFrom(Person).classBody(function () {
 
    this.job = function () {
 
        return "student";
 
    }
 
}).toClass();
 
const Teacher = Frank.buildType("Teacher").extendsFrom(Person).classBody(function () {
 
    this.job = function () {
 
        return "teacher";
 
    }
 
}).toClass();
 
var student = Frank.newInstance(Student);
 
var teacher = Frank.newInstance(Teacher);
 
student.name("Tom").age(20);
 
teacher.name("Lili").age(30);
 
console.log("student.isInstance(   SuperClass)  :  " + new Boolean(student.isInstance(SuperClass)).toString());
 
console.log("student.isInstance(       Person)  :  " + new Boolean(student.isInstance(Person)).toString());
 
console.log("student.isInstance(      Student)  :  " + new Boolean(student.isInstance(Student)).toString());
 
console.log("Student.isAssignableFrom( Person)  :  " + new Boolean(Student.isAssignableFrom(Person)).toString());
 
console.log("Student.isAssignableFrom(Student)  :  " + new Boolean(Student.isAssignableFrom(Student)).toString());
 
//
console.log("teacher.isInstance(   SuperClass)  :  " + new Boolean(teacher.isInstance(SuperClass)).toString());
 
console.log("teacher.isInstance(       Person)  :  " + new Boolean(teacher.isInstance(Person)).toString());
 
console.log("teacher.isInstance(      Teacher)  :  " + new Boolean(teacher.isInstance(Teacher)).toString());
 
console.log("Teacher.isAssignableFrom( Person)  :  " + new Boolean(Teacher.isAssignableFrom(Person)).toString());
 
console.log("Teacher.isAssignableFrom(Teacher)  :  " + new Boolean(Teacher.isAssignableFrom(Teacher)).toString());
 
//
 
console.log("teacher.isInstance(      Student)  :  " + new Boolean(teacher.isInstance(Student)).toString());
 
console.log("teacher.isInstance(       Object)  :  " + new Boolean(teacher.isInstance(Object)).toString());
 
console.log(student.say());
 
console.log(teacher.say());
 
//output logs:
 
student.isInstance(   SuperClass)  :  true
  
student.isInstance(       Person)  :  true
 
student.isInstance(      Student)  :  true
 
Student.isAssignableFrom( Person)  :  true
 
Student.isAssignableFrom(Student)  :  false
 
teacher.isInstance(   SuperClass)  :  true
 
teacher.isInstance(       Person)  :  true
 
teacher.isInstance(      Teacher)  :  true
 
Teacher.isAssignableFrom( Person)  :  true
 
Teacher.isAssignableFrom(Teacher)  :  false
 
teacher.isInstance(      Student)  :  false
 
teacher.isInstance(       Object)  :  true
 
I am a student, Tom , 20 year-old.
 
I am a teacher, Lili , 30 year-old.
###API
 Type:Frank.buildType(className:string)
 Type:Frank.FrancFactory.buildType(className:string)
 Type:Type.extendsFrom(clazz:Function/Class/Constructor)
 Type:Type.classBody(func:Function/Class/Constructor)
 Class:Type.toClass()
 FrankBasic:Class.newInstance()
 FrankBasic:Frank.newInstance(Class)
 Boolean:Class.isAssignableFrom(clazz:Function/Class/Constructor)
 Boolean:FrankBasic.isInstance(clazz:Function/Class/Constructor)
 FrankBasic.superApply(methodName,arguments)
### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
