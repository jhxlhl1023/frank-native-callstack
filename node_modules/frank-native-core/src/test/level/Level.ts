import Frank from "../../index";
export = Frank.buildType().classBody(class {
    job: () => string = function (this: any): string {
        return this.level() + " " + this.superApply("job");
    };
}).toClass();