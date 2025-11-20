import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Guest } from '../models/guest';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { GuestService } from '../services/guest-service';

@Component({
  selector: 'app-gest-details',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule],
  templateUrl: './gest-details.html',
  styleUrl: './gest-details.css',
})
export class GestDetails {
  guest: Guest | null = null;
  constructor(
    public dialogRef: MatDialogRef<GestDetails>,
    private guestService: GuestService,
    @Inject(MAT_DIALOG_DATA) public data: Guest
  ) {
    data ? (this.guest = data) : null;
  }

  confirmar(): void {
    if(this.guest){
      this.guest.isIngress=true;
      this.guestService.setIngress(this.guest).finally(() => {this.dialogRef.close(true);});
    }
    
    
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
