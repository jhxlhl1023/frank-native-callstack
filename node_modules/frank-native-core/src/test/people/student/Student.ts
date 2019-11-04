import Frank from "../../../index";
import People from "../People";
export = Frank.buildType("Student").extendsFrom(People).classBody(class Student {
    job: () => void = function (): string {
        return "student";
    }
}).toClass();