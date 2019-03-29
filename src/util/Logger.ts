import {NGXLoggerMonitor, NGXLogInterface} from 'ngx-logger';

export class Logger implements NGXLoggerMonitor {
    onLog(log: NGXLogInterface) {
        console.log('myCustomLoggerMonitor', log);
    }
}
/*
this.logger.setCustomParams(new HttpParams());
this.logger.setCustomHttpHeaders(new HttpHeaders({'X-Custom-Header': '123456'}));
this.logger.updateConfig({ level: NgxLoggerLevel.DEBUG });

export class MyService {
  constructor(private logger: NGXLogger) {
    this.logger.registerMonitor(new MyLoggerMonitor())
    this.logger.error('BLAHBLAHBLAH');
  }

export class MyService {
  private logger: NGXLogger;
  constructor(customLogger: CustomNGXLoggerService) {
    this.logger = customLogger.create({ level: NgxLoggerLevel.ERROR });
    this.logger.error('BLAHBLAHBLAH');
  }

@Component(...)
export class YourComponent {
  constructor(private logger: NGXLogger) {
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');
  }
}

for testing :
    NGXLoggerHttpService: NGXLoggerHttpServiceMock
    CustomNGXLoggerService: CustomNGXLoggerServiceMock
    NGXLogger: NGXLoggerMock
 */
