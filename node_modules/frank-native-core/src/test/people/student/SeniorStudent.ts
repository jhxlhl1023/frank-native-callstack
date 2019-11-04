import Frank from "../../../index";
import Student from "./Student";
import Senior from "../../level/Senior";
export = Frank.buildType().classBody(Senior).extendsFrom(Student).toClass();
