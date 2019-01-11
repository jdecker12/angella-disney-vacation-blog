import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styles: ["./ClientApp/styles.scss"]
})
export class AppComponent {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconSet(
            sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
  title = 'Go Disney';
}
