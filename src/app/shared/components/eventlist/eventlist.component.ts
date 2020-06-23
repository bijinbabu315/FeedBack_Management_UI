import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {
  dtOptions: any = {};
  eventList: any = {};
  constructor(private userService: UserService) {
    this.eventList = [] ;
  }

  ngOnInit() {
    this.getAllEvents();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom       : 'Bfrtip',
      buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
    };
    this.eventList = [] ;
    const table: any = $('#table1');
  }

  getAllEvents() {
    this.userService.getAllEvents$().subscribe(eventSummaryList => {
      console.log(eventSummaryList);
      this.eventList = eventSummaryList;
    }) ;
  }
}
