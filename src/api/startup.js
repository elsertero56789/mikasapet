
class StartUp{
    constructor({server}){
        this._server = server;
    }
    async startUp(){
        await this._server.start();
    }
}
module.exports = StartUp;