import { Component, Inject } from '@angular/core';
import { GuestService } from '../services/guest-service';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Guest } from '../models/guest';
import { FormsModule } from '@angular/forms';
import { GestDetails } from '../gest-details/gest-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gest-index',
  imports: [FormsModule,CommonModule],
  templateUrl: './gest-index.html',
  styleUrl: './gest-index.css',
})
export class GestIndex {
  guestsList: Guest[] = [];
  guest: Guest | null = null;
  filtered: Guest[] = [];

  searchName: string = '';
  searchDoc: string = '';

  constructor(
    public dialogRef: MatDialogRef<GestIndex>,
    @Inject(MAT_DIALOG_DATA) public data: Guest[],
    private dialog: MatDialog
  ) {
    if(data){
      console.log('Datos recibidos en GestIndex:', data);
      this.guestsList = data;
      this.filtered = data;
    }
    // data ? (this.guestsList = data) : null;
  }
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    
  }
  filter() {
    const name = this.searchName.toLowerCase();
    const doc = this.searchDoc.toLowerCase();

    this.filtered = this.guestsList.filter((g:Guest) =>
      (name === '' || `${g.nombre} ${g.apellido}`.toLowerCase().includes(name)) &&
      (doc === '' || g.numeroDocumento.toLowerCase().includes(doc))
    );
  }

  openDetails(guest:Guest){
      if(!guest){
        alert('Invitado no encontrado para el código escaneado.');
        return;
      }
      const dialogRef = this.dialog.open(GestDetails, {
        width: '400px',
        data: guest,
        disableClose: true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('✅ Confirmado cierre para', guest.nombre);
          
  
        } else {
          console.log('❌ Cancelado');
  
        }
      });
    }
 close(){
  this.dialogRef.close(false);
 }
}
