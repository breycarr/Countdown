describe("solve", function() {
    it("should accept a string", function() {
        expect(function() { solve("hello"); }).not.toThrow()
    })

    it("should not accept an argument that isn't a string", function() {
        expect(function() { solve(123); }).toThrow(`not a string`)
    })
})