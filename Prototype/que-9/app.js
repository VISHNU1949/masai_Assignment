const { SmartLight, SmartThermostat } = require("./smartDevices");
const { User, SmartHome } = require("./user");

(async function() {
    const user1 = new User("JohnDoe", "password123");
    await user1.authenticate();

    // Creating Smart Home
    const johnsHome = new SmartHome(user1.username);
    user1.setSmartHome(johnsHome);

    const light1 = new SmartLight("Living Room Light", "Philips", "WiFi");
    const thermostat1 = new SmartThermostat("Home Thermostat", "Nest", "WiFi");

    johnsHome.addDevice(light1);
    johnsHome.addDevice(thermostat1);

    johnsHome.listDevices();

    light1.turnOn();
    light1.setBrightness(75);
    light1.setColor("Blue");

    thermostat1.setTemperature(24);
    thermostat1.changeMode("Eco");

    await thermostat1.updateFirmware();
})();
