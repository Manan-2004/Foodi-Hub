import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Addressservice {
  addresses = signal([
    {
      id: 1,
      type: 'Home',
      full: 'B-12, River View Apartments, Ahmedabad'
    },
    {
      id: 2,
      type: 'Office',
      full: 'Tech Park, SG Highway, Ahmedabad'
    }
  ]);

  addAddress(addr:any) {
    this.addresses.update(list => [...list, addr]);
  }

  deleteAddress(id:number) {
    this.addresses.update(list => list.filter(a => a.id !== id));
  }

}
