import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { BreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import {LoginComponent} from './user/login/login.component';
import {User} from './models/user.model';
import {AuthenticationService} from './shared/authentication.service';
import {UserService} from './shared/user.service';
import {Router} from '@angular/router';
import {AgenceService} from './shared/agence.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit, OnDestroy{

    subscription: Subscription;

    items: MenuItem[];

    currentUser: User = new User;

    notificationList: Array<Notification> = [];

    profilPicture!: string;
    allUsers: Array<User> = [];

    constructor(public breadcrumbService: BreadcrumbService, public app: AppComponent, public appMain: AppMainComponent,
                private authenticationService: AuthenticationService, private userService: UserService, private router: Router, private agenceService: AgenceService) {

        if (this.currentUser == null){
            this.currentUser = new User();
            this.currentUser.userId = 0;
            this.currentUser.username = "";
            this.currentUser.password = "";
            this.currentUser.accessToken = "";
            this.currentUser.email = "";
            this.currentUser.birthDate = new Date();
            this.currentUser.refreshToken = "";

        }

        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });

        this.authenticationService.currentUser.subscribe( data => {
            this.currentUser = data;
        });
    }

    ngOnInit() {
        if (this.currentUser?.userId){
            this.userService.getNotifications().subscribe(data => {
                this.notificationList = data;
            });
            this.userService.getUserProfilPicture().subscribe(pic => {
                this.profilPicture = pic.split('\\').pop();
            }, err => {
                this.profilPicture = "https://res.cloudinary.com/diubo1tzp/image/upload/v1650587140/defaultProfilePicture_drigsj.png";
            });
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    redirectTo(){
        this.router.navigate(['/profil'])
            .then(() => {
                window.location.reload();
            });
    }

    logOut(){
        this.authenticationService.logOut();
        this.router.navigate(['/login'])
            .then(() => {
                window.location.reload();
            });
    }


}
