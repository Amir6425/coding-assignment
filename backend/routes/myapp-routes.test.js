const app = require("../app");
const supertest = require('supertest');
const request = supertest(app);


// the next four tests for enpoint /myapi/numbers/${numbers}
describe("get numbers from the endpoint", () => {
  let num1 = 1;
  let num2 = 12;
  let sum = num1 + num2;
    it("should return sum of numbers and  true for prime checking.", async () => {
      await request
        .get(`/myapi/numbers/${sum}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({result: sum, isPrime: true });
        
    });
  });

  describe("get numbers from endoint", () => {
    let num1 = 1;
    let num2 = 3;
    let num3 = 100;
    let sum = num1 + num2 +num3;
    it("should return sum of numbers and  false for prime checking.", async () => {
      await request      
        .get(`/myapi/numbers/${sum}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({result: sum, isPrime: false });
        
    });
  });



  describe("check for NaN numbers", () => {
    let num = "ghjk";
    it("should return wrong input", async () => {
      await request
        .get(`/myapi/numbers/${num}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({error: "Wrong input"});
        
    });
  });

  describe("check numbers smaller than 0", () => {
    let num = -789;
    it("should return Page does not exisit", async () => {
      await request
        .get(`/myapi/numbers/${num}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect({error: "Wrong input"});
        
    });
  });

  // the next four tests for enpoint /myapi/number/${number}
describe("get number from the endpoint", () => {
  let num = 13;
  it("should return  true for prime checking.", async () => {
    await request
      .get(`/myapi/number/${num}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({isPrime: true });
      
  });
});

describe("get number from endoint", () => {
  let num = 5432432;
  it("should return  false for prime checking.", async () => {
    await request
      .get(`/myapi/number/${num}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({isPrime: false });
      
  });
});



describe("check for NaN number", () => {
  let num = "klkl";
  it("should return wrong input", async () => {
    await request
      .get(`/myapi/number/${num}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({error: "Wrong input"});
      
  });
});

describe("check number smaller than 1", () => {
  let num = 0;
  it("should return Page does not exisit", async () => {
    await request
      .get(`/myapi/number/${num}`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({error: "Wrong input"});
      
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
        .expect({error: "Page does not exist"});
        
    });
  });