import { isProduction } from './env';

export interface ILogger {
   debug(label: string, message: string, data?: object): void;
   info(label: string, message: string, data?: object): void;
   warn(label: string, message: string, data?: object): void;
   error(label: string, message: string, data?: object): void;
}

export default class Logger implements ILogger {
   debug(label: string, message: string, data?: object) {
      if (isProduction) return;
      console.log(this.make(label, message, 'debug', data));
   }

   info(label: string, message: string, data?: object) {
      console.log(this.make(label, message, 'info', data));
   }

   warn(label: string, message: string, data?: object) {
      console.log(this.make(label, message, 'warning', data));
   }

   error(label: string, message: string, data?: object) {
      console.error(this.make(label, message, 'error', data));
   }

   private make(label: string, message: string, kind: string, data?: object) {
      const time = new Date();
      return JSON.stringify({ ...data, time, label, message, kind });
   }
}
