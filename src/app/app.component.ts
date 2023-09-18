import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteComponent } from 'src/add-note/add-note.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, AddNoteComponent, NotesListComponent, RouterModule],
})
export class AppComponent {}
