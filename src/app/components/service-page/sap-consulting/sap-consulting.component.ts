import { Component } from '@angular/core';

@Component({
  selector: 'app-sap-consulting',
  standalone: false,
  templateUrl: './sap-consulting.component.html',
  styleUrl: './sap-consulting.component.scss'
})
export class SAPConsultingComponent {
sapConsulting = [
  {
    title: "SAP S/4HANA Implementation & Migration",
    description:
      "Modernize enterprise operations with intelligent, real-time SAP ecosystems."
  },
  {
    title: "SAP Analytics Cloud (SAC) & BusinessObjects",
    description:
      "Unlock powerful insights through SAP’s next-gen analytics and reporting platforms."
  },
  {
    title: "SAP Integration with AI/ML & Cloud Platforms",
    description:
      "Extend SAP capabilities with AI, automation, and hybrid cloud integrations."
  },
  {
    title: "Custom Module Development (FICO, MM, SD, PP)",
    description:
      "Tailor SAP modules to fit unique business workflows and compliance needs."
  },
  {
    title: "SAP Basis & Infrastructure Services",
    description:
      "Maintain and secure SAP systems for maximum uptime and performance."
  },
  {
    title: "Post-Implementation Support & Optimization",
    description:
      "Ensure long-term SAP success through continuous improvement and monitoring."
  }
];
}
