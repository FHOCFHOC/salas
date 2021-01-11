import { DetailsSalaComponent } from 'src/app/details-sala/details-sala.component';
import { Observable } from "rxjs";
import { SalaService } from "../sala.service";
import { Sala } from "../sala";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-sala',
  templateUrl: './list-sala.component.html',
  styleUrls: ['./list-sala.component.css']
})
export class ListSalaComponent implements OnInit {

  salas: Observable<Sala[]>;

  constructor(private salaService: SalaService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.salas = this.salaService.getSalasList();
  }

  deleteSala(id: number) {
    this.salaService.deleteSala(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detailsSala(id: number){
    this.router.navigate(['details', id]);
  }

  updateSala(id: number){
    this.router.navigate(['update', id]);
  }

}
