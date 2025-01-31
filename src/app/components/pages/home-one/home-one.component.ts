import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit, OnDestroy {

  isDown = false;
  startX: number = 0;
  scrollLeft: number = 0;
  autoScrollInterval: any;
  isHovered = false;

  cards = [
    { title: 'Compliance Made Easy:', description: 'All file names and titles adhere to regulatory standards.' },
    { title: 'Flexible Document Preparation:', list: ['Create CTD documents directly in Word, with an option to import Word files.', 'Attach CTD documents as optimised PDF files.'] },
    { title: 'Template Integration:', description: 'Include relevant guidelines or templates directly at the leaf level.' },
    { title: 'Defined Workflows:', description: 'Assign roles for “Doer,” “Reviewer,” and “Publisher” to streamline tasks.' },
    { title: 'Comprehensive Reporting:', description: 'Generate and view multiple reports, including audit trails.' },
    { title: 'Automated PDF Optimisation:', description: 'Complies with agency requirements and includes built-in hyperlinking tools.' },
    { title: 'Technical Validation:', description: 'Validates submissions based on the latest criteria set by regulatory authorities.' },
    { title: 'SPT Tool:', description: 'Helps ensure submissions meet technical and content standards.' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  // Mouse down event to start dragging
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.startX = event.pageX - (event.target as HTMLElement).offsetLeft;
    this.scrollLeft = (event.target as HTMLElement).scrollLeft;
  }

  // Mouse leave event
  onMouseLeave() {
    this.isDown = false;
  }

  // Mouse up event
  onMouseUp() {
    this.isDown = false;
  }

  // Mouse move event to scroll horizontally
  onMouseMove(event: MouseEvent) {
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - (event.target as HTMLElement).offsetLeft;
    const walk = (x - this.startX) * 2; // Adjust scrolling speed
    (event.target as HTMLElement).scrollLeft = this.scrollLeft - walk;
  }

  // Start auto-scrolling
  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (!this.isHovered) {
        const scrollContainer = document.getElementById('scrollContainer');
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;  // Move to the left by 1 pixel per interval
          // If we reach the end, reset to the start (infinite scroll)
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }
    }, 30);  // Adjust interval for speed (lower = faster)
  }

  // Hover event to stop auto-scrolling when hovering over a card
  onCardHover(isHovered: boolean) {
    this.isHovered = isHovered;
    if (isHovered) {
      clearInterval(this.autoScrollInterval); // Stop auto-scrolling
    } else {
      this.startAutoScroll(); // Restart auto-scrolling
    }
  }
}
