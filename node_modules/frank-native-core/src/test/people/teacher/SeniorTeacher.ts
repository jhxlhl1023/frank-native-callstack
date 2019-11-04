import Frank from "../../../index";
import Teacher from "./Teacher";
import Senior from "../../level/Senior";
export = Frank.buildType().classBody(Senior).extendsFrom(Teacher).toClass();
