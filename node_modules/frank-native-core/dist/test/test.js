"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var People_1 = __importDefault(require("./people/People"));
var Level_1 = __importDefault(require("./level/Level"));
var Junior_1 = __importDefault(require("./level/Junior"));
var Senior_1 = __importDefault(require("./level/Senior"));
var Student_1 = __importDefault(require("./people/student/Student"));
var Teacher_1 = __importDefault(require("./people/teacher/Teacher"));
var JuniorStudent_1 = __importDefault(require("./people/student/JuniorStudent"));
var SeniorStudent_1 = __importDefault(require("./people/student/SeniorStudent"));
var JuniorTeacher_1 = __importDefault(require("./people/teacher/JuniorTeacher"));
var SeniorTeacher_1 = __importDefault(require("./people/teacher/SeniorTeacher"));
// Create 8 variables by the classes of the bottom layer
// (JuniorStudent, JuniorTeacher, SeniorStudent, SeniorTeacher)
// +---------------+---------------+---------------+---------------+
// | JuniorStudent | JuniorTeacher | SeniorStudent | SeniorTeacher |
// +-------+-------+-------+-------+-------+-------+-------+-------+
// |  js1  |  js2  |  jt1  |  jt2  |  ss1  |  ss2  |  st1  |  st2  |
// +-------+-------+-------+-------+-------+-------+-------+-------+
var js1 = new JuniorStudent_1.default();
var js2 = new JuniorStudent_1.default();
var ss1 = new SeniorStudent_1.default();
var ss2 = new SeniorStudent_1.default();
var jt1 = new JuniorTeacher_1.default();
var jt2 = new JuniorTeacher_1.default();
var st1 = new SeniorTeacher_1.default();
var st2 = new SeniorTeacher_1.default();
js1.name("JS_TOMY").age(20);
js2.name("JS_LILI").age(21);
ss1.name("SS_TOMY").age(22);
ss2.name("SS_LILI").age(23);
jt1.name("JT_TOMY").age(24);
jt2.name("JT_LILI").age(25);
st1.name("ST_TOMY").age(26);
st2.name("ST_LILI").age(27);
console.log("1. test true isInstance & isAssignableFrom :");
console.log("1.1. js1.isInstance:");
console.log("Object        : " + new Boolean(jt1.isInstance(Object)).toString());
console.log("People        : " + new Boolean(js1.isInstance(People_1.default)).toString());
console.log("Level         : " + new Boolean(js1.isInstance(Level_1.default)).toString());
Level_1.default;
console.log("Student       : " + new Boolean(js1.isInstance(Student_1.default)).toString());
console.log("Junior        : " + new Boolean(js1.isInstance(Junior_1.default)).toString());
console.log("JuniorStudent : " + new Boolean(js1.isInstance(JuniorStudent_1.default)).toString());
console.log("1.2. JuniorStudent.isAssignableFrom:");
console.log("People        : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(People_1.default)).toString());
console.log("Level         : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(Level_1.default)).toString());
console.log("Student       : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(Student_1.default)).toString());
console.log("Junior        : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(Junior_1.default)).toString());
console.log("-----");
console.log("2. test false isInstance & isAssignableFrom");
console.log("2.1. js1.isInstance:");
console.log("Senior        : " + new Boolean(js1.isInstance(Senior_1.default)).toString());
console.log("SeniorStudent : " + new Boolean(js1.isInstance(SeniorStudent_1.default)).toString());
console.log("Teacher       : " + new Boolean(js1.isInstance(Teacher_1.default)).toString());
console.log("JuniorTeacher : " + new Boolean(js1.isInstance(JuniorTeacher_1.default)).toString());
console.log("SeniorTeacher : " + new Boolean(js1.isInstance(SeniorTeacher_1.default)).toString());
console.log("Function : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(Function)).toString());
console.log("2.2. JuniorStudent.isAssignableFrom:");
console.log("JuniorStudent : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(JuniorStudent_1.default)).toString());
console.log("JuniorTeacher : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(JuniorTeacher_1.default)).toString());
console.log("Function : " + new Boolean(JuniorStudent_1.default.isAssignableFrom(Function)).toString());
console.log("3. all fields or methods are independent ");
console.log(js1.say());
console.log(js2.say());
console.log(ss1.say());
console.log(ss2.say());
console.log(jt1.say());
console.log(jt2.say());
console.log(st1.say());
console.log(st2.say());
