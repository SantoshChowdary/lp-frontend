import { makeAutoObservable, reaction } from "mobx";

class TimerStore {
    private time: number;
    private isRunning: boolean;
    private interval: any;
    private isToggled: boolean;

    constructor() {
        this.time = 0;
        this.isRunning = false;
        this.isToggled = false;
        makeAutoObservable(this);

        reaction(
            () => this.isRunning,
            (isRunning) => console.log(isRunning)
        );
    }

    public startTimer() {
        this.isRunning = true;
        this.interval = setInterval(() => {
            this.time++;
        }, 1000);
    }

    public toggleTimer() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.startTimer();
        } else {
            this.pauseTimer();
        };
    };

    public pauseTimer() {
        this.isRunning = false;
        clearInterval(this.interval);
    };

    public resetTimer() {
        this.time = 0;
        this.isRunning = false;
        clearInterval(this.interval);
    };

    public toggleToggled() {
        this.isToggled = !this.isToggled;
    };

    public getIsToggled() {

        return this.isToggled;
    };

    public getTime() {

        return this.time;
    }

    public getIsRunning() {
        return this.isRunning;
    };
};





export const timerStore = new TimerStore();
