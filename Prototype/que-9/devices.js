function Device(name, type) {
    this.name = name;
    this.type = type;
    this.status = "off"; 
}

Device.prototype.turnOn = function() {
    this.status = "on";
    console.log(`${this.name} is now ON.`);
};

Device.prototype.turnOff = function() {
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
};

Device.prototype.getStatus = function() {
    return `${this.name} is currently ${this.status}.`;
};

function SmartDevice(name, type, brand, connectivity) {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

SmartDevice.prototype.updateFirmware = async function() {
    console.log(`Checking for firmware updates for ${this.name}...`);
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(`Firmware updated successfully: ${data.title}`);
    } catch (error) {
        console.log("Firmware update failed:", error);
    }
};

SmartDevice.prototype.checkConnectivity = function() {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
};

module.exports = { Device, SmartDevice };
