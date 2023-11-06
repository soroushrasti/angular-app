import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipieService} from "../recepies/recipie.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'header.component.html',
  selector:'app-header',

})
export class HeaderComponent implements OnInit , OnDestroy{
    userSub= new Subscription();
     isAuthenticated: boolean=false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    onSaveData() {
        this.dataStorageService.postRecipes()
    }

    ngOnDestroy(): void {
      this.userSub.unsubscribe();
    }

    ngOnInit(): void {
      this.userSub= this.authService.user.subscribe(
          user=>{
              this.isAuthenticated= !!user?.token;
          }
      )
    }
}
