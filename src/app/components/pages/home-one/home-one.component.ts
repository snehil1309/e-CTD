import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit, AfterViewInit {

  @ViewChild('animatedList', { static: false }) animatedList!: ElementRef;
  @ViewChild('benefitsSection', { static: false }) benefitsSection!: ElementRef;

  // Array to store module names for *ngFor loop in HTML
  eCTDModules: string[] = [
    "CTD Summaries (QOS)",
    "Non-Clinical Study Reports",
    "Administrative Information (Region Specific)",
    "Quality (CMC)",
    "Clinical Study Reports"
  ];

  // Array for dynamic Bootstrap accordion
  eCTDFeatures: string[] = [
    "Regulatory Compliance: Meet mandatory eCTD standards, eliminating paper-based processes.",
    "Fast Tracking: Quickly locate and track applications for faster reviews.",
    "Lifecycle Management: Simplify updates and changes throughout the submission lifecycle.",
    "Efficient Submissions: Publish, validate, and submit dossiers effortlessly in eCTD or NeeS formats.",
    "Flexible Options: Handle both electronic and paper submissions.",
    "Speedy Approvals: Streamlined workflows reduce approval times.",
    "Improved Archiving: Better record-keeping for sponsors and agencies.",
    "Global Compatibility: Seamlessly manage international submissions.",
    "Easy Access: Enhance collaboration with better document accessibility.",
    "Instant Receipts: Get immediate submission acknowledgements via ESG.",
    "Boosted Productivity: Simplify processes for faster decisions."
  ];

  // Array for demo request cards
  demoCards: string[] = [
    "Intuitive document preparation tools.",
    "Advanced validation and compliance features.",
    "Effortless management of submission workflows."
  ];

  // Array for dynamically generating cards
  cardsData = [
    { icon: "fa-solid fa-check-circle", title: "Compliance Made Easy", details: ["All file names and titles adhere to regulatory standards."] },
    { icon: "fa-solid fa-file-word", title: "Flexible Document Preparation", details: ["Create CTD documents directly in Word, with an option to import Word files.", "Attach CTD documents as optimised PDF files."] },
    { icon: "fa-solid fa-layer-group", title: "Template Integration", details: ["Include relevant guidelines or templates directly at the leaf level."] },
    { icon: "fa-solid fa-users", title: "Defined Workflows", details: ["Assign roles for “Doer,” “Reviewer,” and “Publisher” to streamline tasks."] },
    { icon: "fa-solid fa-chart-bar", title: "Comprehensive Reporting", details: ["Generate and view multiple reports, including audit trails."] },
    { icon: "fa-solid fa-file-pdf", title: "Automated PDF Optimisation", details: ["Complies with agency requirements and includes built-in hyperlinking tools."] },
    { icon: "fa-solid fa-check-double", title: "Technical Validation", details: ["Validates submissions based on the latest criteria set by regulatory authorities."] },
    { icon: "fa-solid fa-tools", title: "SPT Tool", details: ["Helps ensure submissions meet technical and content standards."] }
  ];


  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.benefitsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startAnimation();
              observer.unobserve(this.benefitsSection.nativeElement); // Stop observing once animation starts
            }
          });
        },
        { threshold: 0.3 } // 30% of the section should be visible before triggering animation
      );

      observer.observe(this.benefitsSection.nativeElement);
    }
  }

  startAnimation(): void {
    setTimeout(() => {
      const listItems = this.animatedList?.nativeElement?.querySelectorAll("li");
      if (listItems) {
        listItems.forEach((item: HTMLElement, index: number) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 500); // Delay each bullet by 500ms
        });
      }
    }, 100);
  }
}
