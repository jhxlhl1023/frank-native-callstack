import Frank from "../../../index";
import Teacher from "./Teacher";
import Junior from "../../level/Junior";
export = Frank.buildType().classBody(Junior).extendsFrom(Teacher).toClass();
