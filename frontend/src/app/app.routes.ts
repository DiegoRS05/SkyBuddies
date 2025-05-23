import { Routes } from '@angular/router';
import {IndexComponent} from './features/index/index.component';
import {RegisterComponent} from './features/auth/register/register.component';
import {LoginComponent} from './features/auth/login/login.component';
import {HomeComponent} from './features/home/home.component';
import {ChatComponent} from './features/chat/chat.component';
import {AuthGuard} from './core/guards/auth.guard';
import {ForgotPasswordComponent} from './features/auth/forgot-password/forgot-password.component';
import {GroupComponent} from './features/group/group.component';
import {ResetPasswordComponent} from './features/auth/reset-password/reset-password.component';
import {FiltersComponent} from './features/filters/filters.component';
import {UserComponent} from './features/user/user.component';
import {RecommendationsComponent} from './features/recommendations/recommendations.component';
import {NewGroupComponent} from './features/group/newGroup/new-group.component';
import {ConnectionComponent} from './features/connections/connection.component';
import {JoinComponent} from './features/join/join.component';

/*
  UNCOMMENT THIS LINE FOR CHECK IF THE RAILWAY IS WORKING BUT IT'S COMMENTED FOR NOT CONSUMING THE RAILWAY API
    import { RailwayCheckGuard } from './core/guards/railway-check.guard';
*/

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },

  /*
   * THIS COMMENTED LINE IS FOR CHECK IF THE RAILWAY IS WORKING BUT IT'S COMMENTED FOR NOT CONSUMING THE RAILWAY API
   * -->  { path: 'index', component: GroupsComponent, canActivate: [RailwayCheckGuard] },
   */

  { path: 'index', component: IndexComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'connections', component: ConnectionComponent },
  { path: 'join', component: JoinComponent },
  { path: 'users/chat', component: ChatComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'groups/new', component: NewGroupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'filters/:id', component: FiltersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'users/chat/groups/:groupId', component: ChatComponent },
  // IT'S OBLIGATORY TO HAVE THIS LINE AT THE END OF THE ROUTES BECAUSE IT REDIRECTS
  // TO THE INDEX PAGE IF THE URL IS NOT FOUND
  { path: '**', redirectTo: 'index' },

];
