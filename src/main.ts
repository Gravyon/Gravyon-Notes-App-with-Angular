import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';

// const routes: Routes = [
//   { path: '', title: 'Home Page', component: HomeComponent },
//   //   { path: 'home', title: "Home Page", component: HomeComponent },
//   //   { path: 'contacts', title: "Contacts Page", component: ContactsComponent },
//   { path: 'notes', title: 'Notes Page', component: NotesListComponent },
//   { path: 'new', title: 'Add New Note', component: AddNoteComponent },
//   { path: '**', title: 'Page Not Found', component: NotFoundComponent },
// ];

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
