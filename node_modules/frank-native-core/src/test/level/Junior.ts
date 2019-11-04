import Frank from "../../index";
import Level from './Level';
export = Frank.buildType().extendsFrom(Level).classBody(class {
    level: () => string = () => "junior";
}).toClass();