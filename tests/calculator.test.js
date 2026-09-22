const {add,soustract}=require("../src/calculator");
test("2+3 doit être egal à 5",()=>{
    expect(add(2,3))
.toBe(5);

})
test("2-3 doit être egal à -1",()=>{
    expect(soustract(2,3))
.toBe(5);

})

