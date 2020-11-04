const commandReader = require("linebyline");
const ParkingLot = require("./parkinglot");
const route = require("./route");

const main = async () => {
    const cmd = commandReader.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(
      `Welcome to parking lot system! Please input your command here! To list all of command please type "help"`
    );
    const parkingLot = new ParkingLot();
    cmd.on("line", async (input) => {
      const inputList = input.split(" ");
      const value = inputList.splice(1, inputList.length);
      const command = router[inputList[0]];
      if (!command) {
        console.log(
          `Command not found! Please type "help" to list all of commands`
        );
      } else {
        try {
          const res =
            value.length == 0
              ? await parkingLot[command]()
              : await parkingLot[command](value);
          console.log(res);
        } catch (err) {
          console.log(err);
          console.log(
            `Command not found! Please type "help" to list all of commands`
          );
        }
      }
    });
  };
  
  main();