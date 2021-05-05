class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}`;
    }
}

const aws = new Server("Localhost Server,", "127.0.0.1");
console.log(aws.getUrl());
