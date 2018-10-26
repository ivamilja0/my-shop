import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rootRenderNodes } from '@angular/core/src/view';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router) {
    auth.user$.subscribe(user =>{
      if(user) {
       let returnUrl = localStorage.getItem('returnUrl');
       router.navigateByUrl(returnUrl);
      }
    })
  }
}
