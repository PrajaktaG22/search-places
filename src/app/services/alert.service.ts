import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LogService } from '../services/log.service';

@Injectable()
export class AlertService {

  constructor(private toastr: ToastrService, private log: LogService) { 
  }

  /**
   * Shows a Toastr - red popup on the user screen
   * @param id Console the message 0 - info, 1 - error.
   * @param title The toastr title.
   * @param message The toastr message.
   * @param error complet error object
   * @return Nothing
   */
  failure(id: Number, title: string, message: string, error: any) {  
    if(id === 0)
      this.log.info(message, error);
    else 
      this.log.error(message, error)
      
    this.toastr.error(message, title, {
      positionClass: 'toast-bottom-right'
    });
  }
  /**
   * Shows a Toastr - Green popup on the user screen
   * @param title The toastr title.
   * @param message The toastr message.
   * @param result complet result object
   * @return Nothing
   */
  success(title: string, message: string, result: any) {
    this.log.debug('Operation success: ', result);
    this.toastr.success(message, title, {
      positionClass: 'toast-bottom-right'
    });
  }

  warning(title: string, message: string, result: any) {
    this.log.debug('Operation warning: ', result);
    this.toastr.warning(message, title, {
      positionClass: 'toast-bottom-right'
    });
  }
}
