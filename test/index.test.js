const chai = require("chai");
const ParkingLot = require("../parkinglot");
const parkingLot = new ParkingLot();

describe(`create_parking_lot 6`, async () => {
  it(`should creating parking lot with 6 slots`, async () => {
    const res = await parkingLot.init([6]);
    chai.expect(res).to.be.equal(`Created parking lot with 6 slots`);
  });
});

describe(`park KA-01-HH-1234 white`, async () => {
  it(`should allocate car to slot number 1`, async () => {
    const res = await parkingLot.add(['KA-01-HH-1234','white']);
    chai.expect(res).to.be.equal(`Allocated slot number: 1`);
  });
});

describe(`park KA-01-HH-9999 red`, async () => {
  it(`should allocate car to slot number 2`, async () => {
    const res = await parkingLot.add(['KA-01-HH-9999','red']);
    chai.expect(res).to.be.equal(`Allocated slot number: 2`);
  });
});

describe(`park KA-01-BB-0001 black`, async () => {
  it(`should allocate car to slot number 3`, async () => {
    const res = await parkingLot.add(['KA-01-BB-0001','black']);
    chai.expect(res).to.be.equal(`Allocated slot number: 3`);
  });
});

describe(`park KA-01-HH-7777 red`, async () => {
  it(`should allocate car to slot number 4`, async () => {
    const res = await parkingLot.add(['KA-01-HH-7777','red']);
    chai.expect(res).to.be.equal(`Allocated slot number: 4`);
  });
});

describe(`park KA-01-HH-2701 black`, async () => {
  it(`should allocate car to slot number 5`, async () => {
    const res = await parkingLot.add(['KA-01-HH-2701','black']);
    chai.expect(res).to.be.equal(`Allocated slot number: 5`);
  });
});

describe(`park KA-01-HH-3141 yellow`, async () => {
  it(`should allocate car to slot number 6`, async () => {
    const res = await parkingLot.add(['KA-01-HH-3141','yellow']);
    chai.expect(res).to.be.equal(`Allocated slot number: 6`);
  });
});

describe(`leave KA-01-HH-3141 4`, async () => {
    it(`should leave car with registration number KA-01-HH-3141 for 4 hours parking with charge 30`, async () => {
      const res = await parkingLot.remove(['KA-01-HH-3141','4']);
      chai.expect(res).to.be.equal(`Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30`);
    });
});

describe(`status`, async () => {
    it(`should show all car status in parking lot`, async () => {
      const res = await parkingLot.view();
      chai.expect(res).to.be.equal(`Slot No.\tRegistration No.\tColor\n1\tKA-01-HH-1234\twhite\n2\tKA-01-HH-9999\tred\n3\tKA-01-BB-0001\tblack\n4\tKA-01-HH-7777\tred\n5\tKA-01-HH-2701\tblack\n`);
    });
});

describe(`park KA-01-P-333 yellow`, async () => {
    it(`should allocate car to slot number 6`, async () => {
      const res = await parkingLot.add(['KA-01-P-333','yellow']);
      chai.expect(res).to.be.equal(`Allocated slot number: 6`);
    });
});

describe(`park DL-12-AA-9999 black`, async () => {
    it(`should failed to allocate car to parking lot since parking lot is full`, async () => {
      const res = await parkingLot.add(['DL-12-AA-9999','black']);
      chai.expect(res).to.be.equal(`Sorry, parking lot is full`);
    });
});

describe(`leave KA-01-HH-1234 4`, async () => {
    it(`should leave car with registration number KA-01-HH-1234 for 4 hours parking with charge 30`, async () => {
      const res = await parkingLot.remove(['KA-01-HH-1234','4']);
      chai.expect(res).to.be.equal(`Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30`);
    });
});

describe(`leave KA-01-BB-0001 6`, async () => {
    it(`should leave car with registration number KA-01-BB-0001 for 6 hours parking with charge 50`, async () => {
      const res = await parkingLot.remove(['KA-01-BB-0001','6']);
      chai.expect(res).to.be.equal(`Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50`);
    });
});

describe(`leave DL-12-AA-9999 2`, async () => {
    it(`should error leave car because car with registration number DL-12-AA-9999 is not found`, async () => {
      const res = await parkingLot.remove(['DL-12-AA-9999','2']);
      chai.expect(res).to.be.equal(`Registration number DL-12-AA-9999 not found`);
    });
});

describe(`park KA-09-HH-0987 black`, async () => {
    it(`should allocate car to slot number 1`, async () => {
      const res = await parkingLot.add(['KA-09-HH-0987','black']);
      chai.expect(res).to.be.equal(`Allocated slot number: 1`);
    });
});

describe(`park CA-09-IO-1111 green`, async () => {
    it(`should allocate car to slot number 3`, async () => {
      const res = await parkingLot.add(['CA-09-IO-1111','green']);
      chai.expect(res).to.be.equal(`Allocated slot number: 3`);
    });
});

describe(`park KA-09-HH-0123 red`, async () => {
    it(`should failed to allocate car to parking lot since parking lot is full`, async () => {
      const res = await parkingLot.add(['KA-09-HH-0123','red']);
      chai.expect(res).to.be.equal(`Sorry, parking lot is full`);
    });
});

describe(`status`, async () => {
    it(`should show all car status in parking lot`, async () => {
      const res = await parkingLot.view();
      chai.expect(res).to.be.equal(`Slot No.\tRegistration No.\tColor\n1\tKA-09-HH-0987\tblack\n2\tKA-01-HH-9999\tred\n3\tCA-09-IO-1111\tgreen\n4\tKA-01-HH-7777\tred\n5\tKA-01-HH-2701\tblack\n6\tKA-01-P-333\tyellow\n`);
    });
});