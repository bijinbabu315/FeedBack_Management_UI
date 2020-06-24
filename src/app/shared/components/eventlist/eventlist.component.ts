import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit, OnDestroy {
  dtOptions: any = {};
  eventList: any = [];
  dtTrigger = new Subject();
  constructor(private userService: UserService) {
    this.eventList = [] ;
  }

  /**
   * on init
   */
  ngOnInit() {
    this.getAllEvents();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom       : 'Bfrtip',
      buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
    };

  }

  /**
   * Gets all events
   */
  getAllEvents() {
    this.userService.getAllEvents$().subscribe(eventSummaryList => {
      console.log(eventSummaryList);
      this.eventList = eventSummaryList;
      this.dtTrigger.next();
    }) ;
  }

  /**
   * on destroy
   */
  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }
}
