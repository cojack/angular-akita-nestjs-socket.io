import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
	private readonly startTime = Date.now();

	public getHello(): object {
		return {
			uptime: Date.now() - this.startTime
		};
	}
}
