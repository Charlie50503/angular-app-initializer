import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ConfigService } from '../config.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    {
      provide:APP_INITIALIZER,
      useFactory: (configService: ConfigService) => function () { return configService.load() },
        deps: [ConfigService],
        multi: true
    }

  ],
})
export class HomeModule { }
