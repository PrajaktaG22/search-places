import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable()
export class LogService {
  constructor() { }

  /**
   * Logs a Debug message to console
   * @param msg Debug message.
   * @param obj Debug object.
   * @return Nothing
   */
  debug(msg: string, obj: any) { 
    if(environment.environmentName !== 'production')
      console.log(new Date() + ": " + msg , obj);
  }

  /**
   * Logs an Error message to console
   * @param msg Debug message.
   * @param obj Debug object.
   * @return Nothing
   */
  error(msg: string, obj: any) { 
    console.error(new Date() + ": " + msg , obj);
  }

  /**
   * Logs an Information message to console
   * @param msg Debug message.
   * @param obj Debug object.
   * @return Nothing
   */
  info(msg: string, obj: any) { 
    if(environment.environmentName !== 'production')
      console.info(new Date() + ": " + msg , obj);
  }
}
