const { Device } = require("./devices");

function User(username, password) {
    this.username = username;
    this.password = password;
    this.smartHome = null;
}

User.prototype.authenticate = async function() {
    console.log(`Authenticating ${this.username}...`);
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        if (data.username === this.username) {
            console.log("Authentication successful.");
        } else {
            console.log("Authentication failed.");
        }
    } catch (error) {
        console.log("Authentication error:", error);
    }
};

function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

SmartHome.prototype.addDevice = function(device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s Smart Home.`);
};

SmartHome.prototype.removeDevice = function(deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
    console.log(`${deviceName} removed from ${this.owner}'s Smart Home.`);
};

SmartHome.prototype.listDevices = function() {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));
};

User.prototype.setSmartHome = function(home) {
    this.smartHome = home;
};

module.exports = { User, SmartHome };
