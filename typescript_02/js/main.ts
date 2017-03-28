class Person {

    private vorname: string;

    constructor(vn) {
        this.vorname = vn;
    }

    get a (): string {
        return "ASDF";
    }
    sayName () {
        console.log(this.vorname);
    }
}