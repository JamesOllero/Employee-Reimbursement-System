import { Component, OnInit, Input } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navItems: Array<{title: string, link: string}>;
  constructor(private authService: AuthServiceService,
              private router: Router,
              private route: ActivatedRoute) { }
  returnUrl: string;
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'logout';
  }
  logout() {
    localStorage.clear();
    this.router.navigate([this.returnUrl]);
    window.location.reload();
  }
}
