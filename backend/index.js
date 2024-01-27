const express = require("express");
const rootRouter = require("./routes/index");
const cors= require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.use("/", (req, res) => {
    res.json({ message: "API running...." });
});

app.listen(3000, () => console.log("server listening on port 3000"));


// What if the database crashes right after the first request (only the balance is decreased for one user, and not for the second user)
// What if the Node.js crashes after the first update?

// It would lead to a database inconsistency. Amount would get debited from the first user, and not credited into the other users account.

// If a failure ever happens, the first txn should rollback.

// This is what is called a transaction in a database. We need to implement a transaction on the next set of endpoints that allow users to transfer INR