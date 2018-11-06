import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import {CategoriesComponent} from './categories/categories.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {FiltersComponent} from './filters/filters.component';
// import {ProfileComponent} from './profile/profile.component';
// import {AboutComponent} from './about/about.component';
// import {SidebarComponent} from './sidebar/sidebar.component';
import {AuthGuard} from './nav-bar/auth.guard';
// import {ContactComponent} from './contact/contact.component';
// import {SellComponent} from './sell/sell.component';
import {
  PrivacyComponent, TermsandConditionsComponent, CommunityComponent, HowitworksComponent, DevelopersComponent, CopyrightComponent , TrustComponent} from "./privacy/privacy.component";
import {SampleLoginComponent} from "./sample-login/sample-login.component";
import { SearchProductComponent } from './search-product/search-product.component';
import { ChatComponent } from './chat/chat.component';

// import {UsersComponent} from "./users/users.component";

export const router: Routes = [
  {
    path: 'who-are-we',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'login', loadChildren: 'app/sample-login/sample-login.module#SampleLoginModule'},
  {path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule'},  
  {path: 'products/category/:name', loadChildren: 'app/categories/categories.module#CategoriesModule'},
  {path: 'item', loadChildren: 'app/single-product/single-product.module#SingleProductModule'},
  {path: 'item/:name', loadChildren: 'app/single-product/single-product.module#SingleProductModule'},
  {
    path: 'members',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {path: 'user/:id/:name', loadChildren: 'app/user-detail/user-detail.module#UserDetailModule'},
  {path: 'search/:id', loadChildren: 'app/search-product/search-product.module#SearchProductModule'},
  {path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule', canActivate: [AuthGuard] },    
  {path: 'profile/:id', loadChildren: 'app/profile/profile.module#ProfileModule', canActivate: [AuthGuard]},
  {
    path: 'establish-contact',
    loadChildren: 'app/contact/contact.module#ContactModule'
  },
  {path: 'sell', loadChildren: 'app/sell/sell.module#SellModule', canActivate: [AuthGuard]},

  {path: 'filtered-search' , component:  FiltersComponent },
  {path: '', component: FrontComponent},
  {path: 'privacy-policy', component: PrivacyComponent},
  {path: 'terms-and-conditions', component: TermsandConditionsComponent },
  {path: 'Community', component: CommunityComponent},
  {path: 'how-it-works', component: HowitworksComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'trust-and-safety', component: TrustComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
