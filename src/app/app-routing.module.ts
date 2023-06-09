import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {HomeComponent} from './user/home/home.component';
import {FrontLandingComponent} from './user/front-landing/front-landing.component';
import {ProfilComponent} from './user/profil/profil.component';
import {ForgotPasswordComponent} from './user/forgot-password/forgot-password.component';
import {NewPasswordComponent} from './user/new-password/new-password.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {AuthGuard} from './guards/auth.guard';
import {Role} from './models/role.enum';
import {Auth2Guard} from './guards/auth2.guard';
import {AdminDashboardBackofficeComponent} from './user/admin-dashboard-backoffice/admin-dashboard-backoffice.component';
import {AgenceComponent} from './agence/agence.component';
import {SAdminDashboardBackofficeComponent} from './user/super-admin-dashboard-backoffice/super-admin-dashboard-backoffice.component';
import {RegisterComponent3} from './user/register3/register3.component';
import {RegisterComponent2} from './user/register2/register2.component';
import {
    FAdminDashboardBackofficeComponent
} from './user/franchise-admin-dashboard-backoffice/franchise-admin-dashboard-backoffice.component';
import {Complaint} from './models/complaint';
import {ComplaintComponent} from './complaint/complaint.component';
import {ChatboxComponent} from './chatbox/chatbox.component';
import {ForumComponent} from './forum/forum.component';
import {PostDetailsComponent} from './forum/post-details/post-details.component';
import {ChatPriveComponent} from './forum/chat-prive/chat-prive.component';
import {UserPostsComponent} from './forum/user-posts/user-posts.component';
import {ListeVehiculeFrontComponent} from './vehicule/liste-vehicule/liste-rental-front.component';
import {ContratParOffreFrontComponent} from './vehicule/contrat-par-offre-front/contrat-par-offre-front.component';
import {AddVehiculeFrontComponent} from './vehicule/add-rental-contrat-front/add-rental-contrat-front.component';
import {AjoutVehiculeComponent} from './user/vehiculeBack/ajout-rental-offer/ajout-rental-offer.component';
import {UpdateVehiculeComponent} from './user/vehiculeBack/update-rental-offer/update-rental-offer.component';
import {ListeVehiculesComponent} from './user/vehiculeBack/liste-rental-offer/liste-rental-offer.component';
import {AddReservationComponent} from './reservation/add-rental-contrat/add-rental-contrat.component';
import {ReservationComponent} from './reservation/rental-contrat.component';
import {ListeReservationComponent} from './reservation/liste-contrat/liste-contrat.component';
import {CalendrierComponent} from './calendrier/calendrier.component';



@NgModule({
        imports: [
            RouterModule.forRoot([
                {path: '', component: HomeComponent,
                    children: [
                        {path: '', component: FrontLandingComponent},
                        {path: 'profil', component: ProfilComponent, canActivate: [Auth2Guard]},
                        {path: 'profil/:id', component: UserDetailsComponent, canActivate: [Auth2Guard]},
                        {path: 'post-detais/:id', component: PostDetailsComponent, canActivate: [Auth2Guard]},
                        {path: 'forum', component: ForumComponent, canActivate: [Auth2Guard]},
                        {path: 'chat', component: ChatboxComponent},
                        {path: 'chatP', component: ChatPriveComponent},
                        {path: 'user-post', component: UserPostsComponent},
                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'AddVehicule', component: AddVehiculeFrontComponent },
                        {path: 'listeReservation/:id/ajout', component: AddReservationComponent },
                        {path: 'listeReservation/:id', component: ReservationComponent },
                        {path: 'listReservation', component: ListeReservationComponent },
                        {path: 'calendrier', component: CalendrierComponent },
                    ]
                },
                {path: 'admin', component: AppMainComponent, canActivate: [AuthGuard], data: {roles: [Role.ADMIN]},
                    children: [
                        {path: '', component: AdminDashboardBackofficeComponent},

                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'listVehiculesback', component: ListeVehiculesComponent },
                        {path: 'AddReservation', component: AddVehiculeFrontComponent },
                    ]
                },
                {path: 'adminfranchise', component: AppMainComponent, canActivate: [AuthGuard], data: {roles: [Role.ADMIN_FRANCHISE]},
                    children: [
                        {path: '', component: FAdminDashboardBackofficeComponent},
                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'AddReservation', component: AddVehiculeFrontComponent },
                        {path: 'listVehiculesback', component: ListeVehiculesComponent },
                    ]
                },
                {path: 'adminfranchise', component: AppMainComponent, canActivate: [AuthGuard], data: {roles: [Role.ADMIN_FRANCHISE]},
                    children: [
                        {path: '', component: AdminDashboardBackofficeComponent},
                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'AddReservation', component: AddVehiculeFrontComponent },
                        {path: 'listVehiculesback', component: ListeVehiculesComponent },

                    ]
                },

                {path: 'superadmin', component: AppMainComponent, canActivate: [AuthGuard], data: {roles: [Role.SUPERADMIN]},
                    children: [
                        {path: 'agence', component: AgenceComponent},
                        {path: 'complaint', component: ComplaintComponent},
                        {path: '', component: SAdminDashboardBackofficeComponent},
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'AddReservation', component: AddVehiculeFrontComponent },
                        {path: 'AddVehicule', component: AjoutVehiculeComponent },
                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'UpdateVehicule/:idvehicule', component: UpdateVehiculeComponent },
                        {path: 'listVehiculesback', component: ListeVehiculesComponent },

                    ]
                },

                {path: 'user', component: HomeComponent,
                    children: [
                        {path: 'landing', component: FrontLandingComponent},
                        {path: 'profil', component: ProfilComponent},
                        {path: 'profil/:id', component: UserDetailsComponent},
                        {path: 'chat', component: ChatboxComponent},
                        {path: 'forum', component: ForumComponent},
                        {path: 'post-detais/:id', component: PostDetailsComponent},
                        {path: 'user-post', component: UserPostsComponent},
                        {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                        {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                        {path: 'AddReservation', component: AddVehiculeFrontComponent },
                        {path: 'listVehiculesback', component: ListeVehiculesComponent },

                    ]
                },
                {path: 'register', component: RegisterComponent},
                {path: 'register2', component: RegisterComponent2},
                {path: 'register3', component: RegisterComponent3},
                {path: 'error', component: AppErrorComponent},
                {path: 'access', component: AppAccessdeniedComponent},
                {path: 'notfound', component: AppNotfoundComponent},
                {path: 'reset-password', component: ForgotPasswordComponent},
                {path: 'new-password', component: NewPasswordComponent},
                {path: 'login', component: LoginComponent},
                {path: '**', redirectTo: '/notfound'},
                {path: 'listVehicules', component: ListeVehiculeFrontComponent },
                {path: 'listeContratFront/:id', component: ContratParOffreFrontComponent },
                {path: 'AddReservation', component: AddVehiculeFrontComponent },
                {path: 'listVehiculesback', component: ListeVehiculesComponent },
            ])
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {
}
