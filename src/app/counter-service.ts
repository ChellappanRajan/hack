import { interval } from "rxjs";
import { take } from "rxjs/operators";

// Function to create a countdown timer
export function startCountdown(duration: number) {
  // Emit a value every second (1000ms), take `duration` values
  const countdown$ = interval(1000).pipe(take(duration));

  return countdown$;
}
