import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.ng.html',
  styleUrl: './app.sass'
})
export class App {
  title = 'hack';
}
