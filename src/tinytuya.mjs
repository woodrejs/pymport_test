/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { proxify, pymport } = require("pymport");

const tinytuya = proxify(pymport("tinytuya"));

const createSmartSwitch = (options) => {
  try {
    const device = tinytuya.OutletDevice({
      dev_id: options.deviceId,
      local_key: options.key,
      address: options.ip,
      version: 3.4,
    });

    return device;
  } catch (error) {
    console.log("Error!!", error);
  }
};

module.exports = createSmartSwitch;

// TODO
// const scan = tinytuya.deviceScan();
// device.status();
// device.turn_off();
// device.turn_on();
