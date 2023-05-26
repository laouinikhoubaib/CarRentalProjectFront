import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import {ReservationServiceService} from '../../shared/reservation-service.service';
import {VehiculeService} from '../../shared/vehicule.service';
import {Reservation} from '../../models/reservation';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../shared/authentication.service';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-add-reservation-front',
  templateUrl: './add-rental-contrat-front.component.html',
  styleUrls: ['./add-rental-contrat-front.component.css']
})
export class AddVehiculeFrontComponent implements OnInit {

  contract = new Reservation();

    vehiculeId: number;
   today = new Date();
   month = this.today.getMonth();
   year = this.today.getFullYear();
    userId: number;
    currentUser: User;


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private rentalService: ReservationServiceService,
    private router: Router,
    private service: VehiculeService,
    private userService: UserService,
    private authService: AuthenticationService
  ) {
    this.vehiculeId = this.route.snapshot.params['id'];
      this.authService.currentUser.subscribe(data => {
          this.currentUser = data;
      });
  }
  ngOnInit(): void {
      this.userService.getCurrentUser().subscribe((user: User) => {
          this.currentUser = user;
          this.userId = user.userId;
      });
  }




    addRentalContrat() {
        this.rentalService.addReservation(this.contract, this.vehiculeId, this.userId)
            .subscribe(
                (res) => {
                    console.log("++++++++++++++", res);
                    this.successNotification();
                },
                (error) => {
                    console.log("Erreur lors de l'ajout du contrat:", error);
                    this.alertError();
                }
            );
    }

  alertError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error is generated when adding the contract. Please check availability',
    });
  }
  successNotification() {
    Swal.fire('Contract added successfuly!');
  }


  disponile(data: any) {
    console.log(data.idvehicule)
    this.service.getDisponible(data.offreid).subscribe(res => {
      console.log(res)
      alert(res)
    }, err => {
      alert('error de serveur')
    })
  }

}
