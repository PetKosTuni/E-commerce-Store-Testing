import add from "./add";

describe("Add", () => {
    it("adds positive number to positive number", () =>{
        expect(add(3,6)).toBe(9)
    });
})
