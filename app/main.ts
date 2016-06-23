import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// Our main component
import { AppComponent } from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);