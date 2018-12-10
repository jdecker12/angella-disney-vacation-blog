class StoreCustomer {
    constructor(private mssg: string, private fName: string, private lName: string) { }

    private ourName: string;
    private ourMssg: string;
    private visits: number = 200;

    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }

    set introMssg(val) {
        this.introMssg = this.ourMssg;
    }

    get introMssg() {
        return this.introMssg;
    }

    public showName() {
        console.log(this.mssg + " " + this.fName + " " + this.lName +  " " + this.visits);
    }
}