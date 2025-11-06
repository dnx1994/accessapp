import { Component } from '@angular/core';
import { GuestService } from '../services/guest-service';
import { Guest } from '../guest';

@Component({
  selector: 'app-gest-index',
  imports: [],
  templateUrl: './gest-index.html',
  styleUrl: './gest-index.css',
})
export class GestIndex {
  guestsList: Guest[] = [];
  
  constructor(private guestService: GuestService) {}
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];
    if(this.guestsList.length===0){
      this.guestService.import();
      this.guestsList=localStorage.getItem('guests')?JSON.parse(localStorage.getItem('guests')!):[];

    }
  }
}
