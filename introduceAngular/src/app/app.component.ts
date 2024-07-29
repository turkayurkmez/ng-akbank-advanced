import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introduce Angular';
  name:string = 'Türkay Ürkmez';
  date:string = 'Temmuz 2024';

  person: Person = new Person(1, 'Necati Şaşmaz', 'Eylül 2023');
  
}
