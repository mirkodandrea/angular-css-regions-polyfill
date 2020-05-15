import { AfterViewInit, Component, Input, OnInit, TemplateRef, Renderer2, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  @Input() header: TemplateRef<HTMLElement>;
  @Input() footer: TemplateRef<HTMLElement>;

  public pages = ['0', '1'];

  constructor(private zone: NgZone){}

  ngOnInit() {
  }

  getPages(){
    console.log(this.pages);
    return this.pages;
  }

  inPages(p){
    console.log(this.pages);
    return this.pages.findIndex(n => n==p)>=0;
  }

  handleRegions(ev: Event) {
    this.zone.run(() => {
    // @ts-ignore
    
    const firstEmpty = ev.detail.firstEmptyRegionIndex;
    console.log(firstEmpty);
    let changed = false;
    if (firstEmpty > 0) {
      this.pages = [... this.pages.slice(0, firstEmpty)];
    }
    
    else {
      this.pages = [...Array(this.pages.length + 1).keys()].map(n => n.toString());
      console.log(this.pages);
    }
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    const flow = document.getNamedFlow("article");
    flow.addEventListener("regionfragmentchange", ev => this.handleRegions(ev));
    
  }
}
