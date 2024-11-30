abstract class ClickPoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void
    getRealTime(): number{
        // complex calculation
        return 8
    }
}

class Instagram extends ClickPoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia is sexy")
    }
}

const camera = new Instagram("nikon", 'yes', 69)