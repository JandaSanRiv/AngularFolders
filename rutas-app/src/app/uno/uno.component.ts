import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cambiaComponente(){
      console.log("Cmabia componente");
      this.router.navigate(['/tres'], {queryParams: {order : 'popular'}});
  }

}
