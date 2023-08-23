const app = require("./app")
const supertest = require(app)
const request = supertest(app)

describe("/test endpoint" , () => {
    it("Test aplikacji", async() => {
        const response = await request.get("./test")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello World")
    })
})