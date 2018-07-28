import { NgModule } from '@angular/core';
import { SpinnerComponent } from '@app/shared/spinner/spinner.component';

@NgModule({
    declarations: [SpinnerComponent],
    exports: [SpinnerComponent]
})
export class SpinnerModule {
}
