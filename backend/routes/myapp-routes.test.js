const app = require("../app")
const supertest = require('supertest')
const request = supertest(app)


// the next four tests for enpoint /myapi/numbers/${numbers}
describe("get numbers from the endpoint", () => {
    it("should return sum of numbers and  true for prime checking.", async () => {
      await request
        .get("/myapi/numbers/1,4l")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({Result: 5, isPrime: true });
        
    });
  });

  describe("get numbers from endoint", () => {
    it("should return sum of numbers and  false for prime checking.", async () => {
      await request
        .get("/myapi/numbers/1,3,100")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({Result: 104, isPrime: false });
        
    });
  });



  describe("check for NaN numbers", () => {
    it("should return wrong input", async () => {
      await request
        .get("/myapi/numbers/8989,kl,23")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({Result: "Wrong input"});
        
    });
  });

  describe("check numbers smaller than 0", () => {
    it("should return Page does not exisit", async () => {
      await request
        .get("/myapi/numbers/-8989,23")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({Result: "Wrong input"});
        
    });
  });

  // the next four tests for enpoint /myapi/number/${number}
describe("get number from the endpoint", () => {
  it("should return  true for prime checking.", async () => {
    await request
      .get("/myapi/number/13")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({isPrime: true });
      
  });
});

describe("get number from endoint", () => {
  it("should return  false for prime checking.", async () => {
    await request
      .get("/myapi/number/5555")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({isPrime: false });
      
  });
});



describe("check for NaN number", () => {
  it("should return wrong input", async () => {
    await request
      .get("/myapi/number/ll")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({Result: "Wrong input"});
      
  });
});

describe("check number smaller than 0", () => {
  it("should return Page does not exisit", async () => {
    await request
      .get("/myapi/number/0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({Result: "Wrong input"});
      
  });
});


  // This test check for wrong endpoint. It does not matter number or numbers
  describe("check for wrong endpont", () => {
    it("should return wrong input", async () => {
      await request
        .get("/myapi/blanbala")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({Error: "Page does not exist"});
        
    });
  });