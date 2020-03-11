import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeMapComponent } from './home-map/home-map.component';
import { TitleComponent } from './title/title.component';
import { AssessComponent } from './assess/assess.component';
import { HumanAnalysisComponent } from './human-analysis/human-analysis.component';
import { HouseRegisterComponent } from './house-register/house-register.component';
import { MultipleEventComponent } from './multiple-event/multiple-event.component';
import { SafeDangerComponent } from './safe-danger/safe-danger.component';
import { IndustrialEconomyComponent } from './industrial-economy/industrial-economy.component';
import { OrganizationComponent } from './organization/organization.component';
import { TextBannerComponent } from './text-banner/text-banner.component';
import { EventReportComponent } from './event-report/event-report.component';
import { EventMakeComponent } from './event-make/event-make.component';
import { EventOverComponent } from './event-over/event-over.component';
import { HeaderComponent } from './header/header.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ColorCountComponent } from './color-count/color-count.component';
import { PcountComponent } from './a-population/pcount/pcount.component';
import { YoungStrongComponent } from './a-population/young-strong/young-strong.component';
import { AbroadComponent } from './a-population/abroad/abroad.component';
import { TypelistComponent } from './a-population/typelist/typelist.component';
import { HouseHoldComponent } from './a-population/house-hold/house-hold.component';
import { BuildUpComponent } from './a-economics/build-up/build-up.component';
import { EnterpriseComponent } from './a-economics/enterprise/enterprise.component';
import { IncomeComponent } from './a-economics/income/income.component';
import { TaxSituationComponent } from './a-economics/tax-situation/tax-situation.component';
import { EcountComponent } from './a-economics/ecount/ecount.component';
import { CanvasCircleComponent } from './canvas-circle/canvas-circle.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        HomeMapComponent,
        TitleComponent,
        AssessComponent,
        HumanAnalysisComponent,
        HouseRegisterComponent,
        MultipleEventComponent,
        SafeDangerComponent,
        IndustrialEconomyComponent,
        OrganizationComponent,
        TextBannerComponent,
        HeaderComponent,
        DashBoardComponent,
        ColorCountComponent,
        PcountComponent,
        YoungStrongComponent,
        AbroadComponent,
        TypelistComponent,
        HouseHoldComponent,
        BuildUpComponent,
        EnterpriseComponent,
        IncomeComponent,
        TaxSituationComponent,
        EcountComponent,
        CanvasCircleComponent
    ],
    declarations: [
        HomeMapComponent,
        TitleComponent,
        AssessComponent,
        HumanAnalysisComponent,
        HouseRegisterComponent,
        MultipleEventComponent,
        SafeDangerComponent,
        IndustrialEconomyComponent,
        OrganizationComponent,
        TextBannerComponent,
        EventReportComponent,
        EventMakeComponent,
        EventOverComponent,
        HeaderComponent,
        DashBoardComponent,
        ColorCountComponent,
        PcountComponent,
        YoungStrongComponent,
        AbroadComponent,
        TypelistComponent,
        HouseHoldComponent,
        BuildUpComponent,
        EnterpriseComponent,
        IncomeComponent,
        TaxSituationComponent,
        EcountComponent,
        CanvasCircleComponent
    ]
})
export class appComponentsModule { }
