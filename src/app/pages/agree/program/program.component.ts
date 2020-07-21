import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/core/services/program.service';
import { DebtsService } from 'src/app/core/services/debts.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor(public program: ProgramService, public debtService: DebtsService) { }

  ngOnInit() {
  }

}
