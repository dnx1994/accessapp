import { Routes } from '@angular/router';
import { MainScreen } from './main-screen/main-screen';

export const routes: Routes = [{path: '' , component: MainScreen, children:[
    // {path: 'go', component: RutineplayerComponent},
    // {path: 'routines', component: RoutineIndexComponent}
  ]},
];
