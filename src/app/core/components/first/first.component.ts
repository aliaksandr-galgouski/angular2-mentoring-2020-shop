import { Component, Inject, OnInit, Optional } from '@angular/core';
import {
  ConfigOptionsService,
  ConstantsToken,
  LocalStorageService,
  RandomToken,
} from '../../services';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsToken) private constants: object,
    @Optional() @Inject(RandomToken) private token: string
  ) {}

  ngOnInit(): void {
    console.log('LocalStorageService by providedIn', this.localStorageService);
    console.log('ConfigOptionsService by useClass', this.configOptionsService);
    console.log('Constants by useValue', this.constants);
    console.log('Token by useFactoy', this.token);
  }
}
