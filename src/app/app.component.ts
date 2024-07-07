import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgGridUseComponent } from './pages/ag-grid-use/ag-grid-use.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AgGridUseComponent,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ag-gridDemo';
}
