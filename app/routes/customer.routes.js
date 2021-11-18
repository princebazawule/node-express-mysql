module.exports = app => {
    const customers = require("../controllers/customer.controller.js")

    // create a new customer
    app.post("/customers", customers.create)

    // get all customers
    app.get("/customers", customers.findAll)

    // get single customer by customerId
    app.get("/customers/:customerId", customers.findOne)

    // update customer by customerId
    app.put("/customers/:customerId", customers.update)

    // delete a customer by customerId
    app.delete("/customers/:customerId", customers.delete)

    // delete all customers
    app.delete("/customers", customers.deleteAll)
}