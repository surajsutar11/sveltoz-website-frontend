import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { AlMlSolutionsComponent } from './al-ml-solutions/al-ml-solutions.component';
import { DroneDevelopementComponent } from './drone-developement/drone-developement.component';
import { EnterpriseSoftwareComponent } from './enterprise-software/enterprise-software.component';
import { DataEngineeringComponent } from './data-engineering/data-engineering.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { SAPConsultingComponent } from './sap-consulting/sap-consulting.component';
import { CloudInfrastructureComponent } from './cloud-infrastructure/cloud-infrastructure.component';
import { AutomationDigitalComponent } from './automation-digital/automation-digital.component';
import { TechnologyConsultingComponent } from './technology-consulting/technology-consulting.component';

@NgModule({
  declarations: [
    ServiceComponent,
    AlMlSolutionsComponent,
    DroneDevelopementComponent,
    EnterpriseSoftwareComponent,
    DataEngineeringComponent,
    QualityAssuranceComponent,
    SAPConsultingComponent,
    CloudInfrastructureComponent,
    AutomationDigitalComponent,
    TechnologyConsultingComponent
  ],
 imports: [CommonModule],
 exports: [ServiceComponent]
})
export class ServicePageModule { }
