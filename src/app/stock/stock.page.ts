import {Component, OnInit} from '@angular/core';
import {ActionSheetController, InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  dataOriginal = [
    {name: 'lechuga', amount: 10, price: 1.5},
    {name: 'tomate', amount: 5, price: 1.5},
    {name: 'acelga', amount: 5, price: 1.5},
    {name: 'aguacate', amount: 1, price: 1.5}
  ];

  data = [...this.dataOriginal];

  constructor(private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit() {
    this.generateItems()
  }

  filtrarLista(event: any) {
    const textoBusqueda = event.target.value.toLowerCase();
    this.data = this.dataOriginal.filter(item => {
      return item.name.toLowerCase().includes(textoBusqueda);
    });
  }
  private generateItems() {
    const count = this.data.length + 1;
    for (let i = 0; i < 50; i++) {
      this.data.push({name: `lechuga + ${i}`, amount: count + i, price: 1.5});
    }
  }
  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  async abrirMenu(item: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Acciones para ' + item.name,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            // Lógica para eliminar el elemento
          }
        },
        {
          text: 'Editar',
          handler: () => {
            // Lógica para editar el elemento
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

}
