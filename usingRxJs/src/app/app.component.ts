import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import {
  favoriteProduct,
  Product,
  productCollection,
} from './models/product.mock';
import { global_name } from './models/samples.signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'usingRxJs';

  /*
   * 1. Bir component'in @Input özelliğine atanan değer (referans) değiştiğinde yakalanır.
   * 2. Bir component'in event emitter'i tetiklendiğinde yakalanır
   * 3. Bir component'de async pipe uygulanmışsa ve söz konusu observable değer değişirse yakalanır.
   */

  /*
     Zone.js vs Signal 

     Zone.js
     Olay yakalayıcı > Olayın Tetiklenmesi > Zone.js:"Bir olay tetiklendi! Angular'ı bilgilendiriyorum" > Angular değişimi algılar: Bazı veriler değişmiş olabilir. Ben bileşen yapısnı kontrol edeyim > UI Güncellenir


     Signal:

     Olay yakalayıcı > Olayın Tetiklenmesi > Signal: Sadece belirli (app-component) bileşen değişti. > Angular değişimi algılar > UI güncellenir

   */

  //name = signal<string>('Kozmos');
  name = global_name;
  lastName = signal('Ürkmez');
  currencies = signal(['Euro', 'Dollar', 'TL', 'Leva']);
  myFavoriteProduct = signal<Product>(favoriteProduct);
  products = signal<Product[]>(productCollection);
  computedSignal = computed(() => `${global_name()} ${this.lastName()}`);

  counter = signal(0);

  constructor() {
    effect(() => {
      console.log('Şu anki değer:', this.counter());
    });
  }

  read() {
    console.log(this.myFavoriteProduct());
    console.log(this.products());
  }

  changeNameValue(): void {
    //name isimli Signal değerini değiştir.
    global_name.set('Şiva');
  }

  updateNameValue(): void {
    global_name.update((value) => 'Kedimin adı ' + value);
  }

  updateCounter() {
    this.counter.update((value) => value + 1);
  }
}
