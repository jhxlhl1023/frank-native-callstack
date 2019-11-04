import Frank from "../../../index";
import People from "../People";
export = Frank.buildType("Teacher").extendsFrom(People).classBody(class {
    job: () => void = function (): string {
        return "teacher";
    }
}).toClass();