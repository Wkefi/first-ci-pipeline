const {add}=require("../src/calculator");
test("2+3 foit être egal à 5",()=>{
    expect(add(2,3))
.toBe(5);
})