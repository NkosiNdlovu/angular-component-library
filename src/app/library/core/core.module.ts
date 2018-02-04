import { DebounceDirective } from './directive/debounce-directive';
import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { NullString } from './pipes/nullString.pipe';
import { DateFormatValidator } from './directive/date-validator';


@NgModule({
  imports: [
  ],
  exports: [FilterPipe, NullString, DebounceDirective, DateFormatValidator],
  declarations: [
    FilterPipe,
    NullString,
    DebounceDirective,
    DateFormatValidator
  ],
  providers: []
})

export class NvCoreModule { }
