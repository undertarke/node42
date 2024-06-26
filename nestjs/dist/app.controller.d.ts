import { AppService } from './app.service';
type userTypeDto = {
    id: number;
    email: string;
    userName: string;
};
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(req: any, res: any): string;
    getDemo(id: string, phone: string, body: userTypeDto): {
        id: string;
        phone: string;
        email: string;
        userName: string;
    };
}
export {};
