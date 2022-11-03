import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';


@Injectable()
export class PusherService {
     pusher : Pusher;

    constructor(){
        this.pusher = new Pusher({
            appId: "1500892",
            key: "33edba77dc1e6b1f35e6",
            secret: "ca2009654e480f31cb47",
            cluster: "us2",
            useTLS: true
          });
    }

    async trigger(channel:string, event:string, data:any){
      await this.pusher.trigger(channel, event, data);
    }
}
