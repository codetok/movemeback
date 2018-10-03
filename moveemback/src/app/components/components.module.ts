import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MaterialSharedModule } from '../material.modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabHolderComponent } from './tab-holder/tab-holder.component';
import { CommunicationsComponent } from './tab-holder/communications/communications.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutModule
  ],
  declarations: [
    BannerComponent,
    HeaderComponent,
    TabHolderComponent,
    CommunicationsComponent
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    TabHolderComponent
  ]
})

export class ComponentsModule { }
