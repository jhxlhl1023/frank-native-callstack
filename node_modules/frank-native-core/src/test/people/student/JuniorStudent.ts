import Frank from "../../../index";
import Student from "./Student";
import Junior from "../../level/Junior";
export = Frank.buildType().classBody(Junior).extendsFrom(Student).toClass();
