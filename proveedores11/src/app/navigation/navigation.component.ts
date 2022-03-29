import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  showFiller = false;
  navHide = false;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    
    console.log(router.url);
    
    /*router.events .subscribe(
      end => {
        let nav = this.router.url.toString()
        console.log('current route: ', this.router.url.toString())
        if (nav == "/login"){
          this.navHide = true;
        }else {
          this.navHide = false;
        }
      }
    )*/
  }

}
