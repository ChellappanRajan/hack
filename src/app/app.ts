import {
  afterRenderEffect,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  viewChild,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import "number-flow";
import "number-flow/group";
import { startCountdown } from "./counter-service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: "./app.ng.html",
  styleUrl: "./app.scss",
})
export class App {
  title = "hack";
  _seconds = viewChild.required<ElementRef<HTMLElement>>("seconds");
  seconds = computed(() => this._seconds().nativeElement);
  _hours = viewChild.required<ElementRef<HTMLElement>>("hours");
  hours = computed(() => this._hours().nativeElement);
  _minutes = viewChild.required<ElementRef<HTMLElement>>("minutes");
  minutes = computed(() => this._minutes().nativeElement);
  duration = 3600;

  constructor() {
    afterRenderEffect(() => {
      console.log(this.hours());

      const hours = this.hours() as any;
      const minutes = this.minutes() as any;
      const seconds = this.seconds() as any;

      hours.trend = -1;
      hours.format = { minimumIntegerDigits: 2 };

      minutes.numberPrefix = ":";
      minutes.trend = -1;
      minutes.digits = { 1: { max: 5 } };
      minutes.format = { minimumIntegerDigits: 2 };

      seconds.numberPrefix = ":";
      seconds.trend = -1;
      seconds.digits = { 1: { max: 5 } };
      seconds.format = { minimumIntegerDigits: 2 };

      // Start a countdown for 10 seconds
      startCountdown(this.duration).subscribe({
        next: (s) => {
          const hh = Math.floor(s / 3600);
          const mm = Math.floor((s % 3600) / 60);
          const ss = s % 60;
          hours.update(hh);
          minutes.update(mm);
          seconds.update(ss);
        },
        complete: () => {
          console.log("Countdown finished!");
        },
      });
    });
  }
}
