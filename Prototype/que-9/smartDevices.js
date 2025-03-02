
const { SmartDevice } = require("./devices");

function SmartLight(name, brand, connectivity, brightness = 50, color = "White") {
    SmartDevice.call(this, name, "Light", brand, connectivity);
    this.brightness = brightness;
    this.color = color;
}

SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

SmartLight.prototype.setBrightness = function(level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${level}%.`);
};

SmartLight.prototype.setColor = function(color) {
    this.color = color;
    console.log(`${this.name} color changed to ${color}.`);
};

function SmartThermostat(name, brand, connectivity, temperature = 22, mode = "Auto") {
    SmartDevice.call(this, name, "Thermostat", brand, connectivity);
    this.temperature = temperature;
    this.mode = mode;
}

SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

SmartThermostat.prototype.setTemperature = function(temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${temp}°C.`);
};

SmartThermostat.prototype.changeMode = function(mode) {
    this.mode = mode;
    console.log(`${this.name} mode set to ${mode}.`);
};

module.exports = { SmartLight, SmartThermostat };
