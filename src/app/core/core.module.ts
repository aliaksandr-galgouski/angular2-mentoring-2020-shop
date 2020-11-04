//#region Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//#endregion
//#region Services imports
import {
  LocalStorageService,
  ConstantsToken,
  APP_CONSTANTS,
  RandomToken,
  GeneratorService,
  GeneratorFactory,
} from './services';
//#endregion
//#region Component imports
import { FirstComponent } from './components/first/first.component';
//#endregion

@NgModule({
  declarations: [FirstComponent],
  exports: [FirstComponent],
  imports: [CommonModule],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: ConstantsToken, useValue: APP_CONSTANTS },
    {
      provide: RandomToken,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService],
    },
  ],
})
export class CoreModule {}
