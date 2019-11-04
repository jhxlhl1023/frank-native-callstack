import Frank from "../../index"
export = Frank.buildType("People").classBody(class P {
    name: (o?: string) => this & string = Frank.FrankUtils.getter_setter();
    age: (o?: number) => this & string = Frank.FrankUtils.getter_setter();
    job: () => any = Frank.FrankUtils.abstract4override;
    say: () => void = function (this: P) {
        return "I am a " + this.job() + ", " + this.name() + " , " + this.age() + " years old.";
    }
}).toClass();