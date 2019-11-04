
// There are 9 classes
// +--------+--------+-------------------------------+
// |                 |             People            |
// |                 +---------------+---------------+
// |                 |    Student    |    Teacher    |
// +--------+--------+---------------+---------------+
// |        | Junior | JuniorStudent | JuniorTeacher |
// |  Level +--------+---------------+---------------+
// |        | Senior | SeniorStudent | SeniorTeacher |
// +--------+--------+---------------+---------------+
import People from "./people/People";
import Level from "./level/Level"
import Junior from "./level/Junior";
import Senior from './level/Senior';
import Student from "./people/student/Student";
import Teacher from "./people/teacher/Teacher";
import JuniorStudent from "./people/student/JuniorStudent";
import SeniorStudent from "./people/student/SeniorStudent";
import JuniorTeacher from "./people/teacher/JuniorTeacher";
import SeniorTeacher from "./people/teacher/SeniorTeacher";
// Create 8 variables by the classes of the bottom layer
// (JuniorStudent, JuniorTeacher, SeniorStudent, SeniorTeacher)
// +---------------+---------------+---------------+---------------+
// | JuniorStudent | JuniorTeacher | SeniorStudent | SeniorTeacher |
// +-------+-------+-------+-------+-------+-------+-------+-------+
// |  js1  |  js2  |  jt1  |  jt2  |  ss1  |  ss2  |  st1  |  st2  |
// +-------+-------+-------+-------+-------+-------+-------+-------+
var js1 = new JuniorStudent();
var js2 = new JuniorStudent();
var ss1 = new SeniorStudent();
var ss2 = new SeniorStudent();
var jt1 = new JuniorTeacher();
var jt2 = new JuniorTeacher();
var st1 = new SeniorTeacher();
var st2 = new SeniorTeacher();
js1.name("JS_TOMY").age(20);
js2.name("JS_LILI").age(21);
ss1.name("SS_TOMY").age(22);
ss2.name("SS_LILI").age(23);
jt1.name("JT_TOMY").age(24);
jt2.name("JT_LILI").age(25);
st1.name("ST_TOMY").age(26);
st2.name("ST_LILI").age(27);
console.log("1. test true isInstance & isAssignableFrom :")
console.log("1.1. js1.isInstance:")
console.log("Object        : " + new Boolean(jt1.isInstance(Object)).toString());
console.log("People        : " + new Boolean(js1.isInstance(People)).toString());
console.log("Level         : " + new Boolean(js1.isInstance(Level)).toString());
Level
console.log("Student       : " + new Boolean(js1.isInstance(Student)).toString());
console.log("Junior        : " + new Boolean(js1.isInstance(Junior)).toString());
console.log("JuniorStudent : " + new Boolean(js1.isInstance(JuniorStudent)).toString());
console.log("1.2. JuniorStudent.isAssignableFrom:")
console.log("People        : " + new Boolean(JuniorStudent.isAssignableFrom(People)).toString());
console.log("Level         : " + new Boolean(JuniorStudent.isAssignableFrom(Level)).toString());
console.log("Student       : " + new Boolean(JuniorStudent.isAssignableFrom(Student)).toString());
console.log("Junior        : " + new Boolean(JuniorStudent.isAssignableFrom(Junior)).toString());
console.log("-----");
console.log("2. test false isInstance & isAssignableFrom")
console.log("2.1. js1.isInstance:")
console.log("Senior        : " + new Boolean(js1.isInstance(Senior)).toString());
console.log("SeniorStudent : " + new Boolean(js1.isInstance(SeniorStudent)).toString());
console.log("Teacher       : " + new Boolean(js1.isInstance(Teacher)).toString());
console.log("JuniorTeacher : " + new Boolean(js1.isInstance(JuniorTeacher)).toString());
console.log("SeniorTeacher : " + new Boolean(js1.isInstance(SeniorTeacher)).toString());
console.log("Function : " + new Boolean(JuniorStudent.isAssignableFrom(Function)).toString());
console.log("2.2. JuniorStudent.isAssignableFrom:")
console.log("JuniorStudent : " + new Boolean(JuniorStudent.isAssignableFrom(JuniorStudent)).toString());
console.log("JuniorTeacher : " + new Boolean(JuniorStudent.isAssignableFrom(JuniorTeacher)).toString());
console.log("Function : " + new Boolean(JuniorStudent.isAssignableFrom(Function)).toString());
console.log("3. all fields or methods are independent ")
console.log(js1.say());
console.log(js2.say());
console.log(ss1.say());
console.log(ss2.say());
console.log(jt1.say());
console.log(jt2.say());
console.log(st1.say());
console.log(st2.say());