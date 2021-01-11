import { Sala } from '../sala';
import { Component, OnInit, Input } from '@angular/core';
import { SalaService } from '../sala.service';
import { ListSalaComponent } from '../list-sala/list-sala.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-sala',
  templateUrl: './details-sala.component.html',
  styleUrls: ['./details-sala.component.css']
})
export class DetailsSalaComponent implements OnInit {

  id: number;
  sala: Sala;

  constructor(private route: ActivatedRoute,private router: Router,
    private salaService: SalaService) { }

  ngOnInit() {
    this.sala = new Sala();

    this.id = this.route.snapshot.params['id'];
    
    this.salaService.getSala(this.id)
      .subscribe(data => {
        console.log(data)
        this.sala = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['salas']);
  }

}
