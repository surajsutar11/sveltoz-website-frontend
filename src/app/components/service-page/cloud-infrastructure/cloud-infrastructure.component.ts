import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud-infrastructure',
  standalone: false,
  templateUrl: './cloud-infrastructure.component.html',
  styleUrl: './cloud-infrastructure.component.scss'
})
export class CloudInfrastructureComponent {
 cloudInfrastructure = [
  {
    title: "Cloud Strategy & Architecture (Azure, AWS, GCP)",
    description:
      "Define scalable and secure multi-cloud strategies aligned with business goals."
  },
  {
    title: "Serverless & Containerized Deployments (Kubernetes, Docker)",
    description:
      "Optimize workloads with cloud-native and container orchestration solutions."
  },
  {
    title: "Cloud Security & Compliance",
    description:
      "Safeguard systems with enterprise-grade encryption, IAM, and regulatory frameworks."
  },
  {
    title: "Backup, Disaster Recovery & Cost Optimization",
    description:
      "Ensure business continuity and cost efficiency across cloud environments."
  },
  {
    title: "Infrastructure as Code (Terraform, ARM)",
    description:
      "Automate infrastructure provisioning for speed, consistency, and scalability."
  },
  {
    title: "24x7 Cloud Operations & Support",
    description:
      "Deliver continuous performance monitoring and technical support globally."
  }
];

}
