const express = require("express");

const transformPayload = require("../utils/transformedPayload");
const router = express.Router();

router.route("/")
    .get((req,res)=>{
        res.send("Hello transform payload app");
    })
    .post(
        (req, res, next) => {
            try {
                const { payload, referenceData } = req.body;

                // Call transformPayload function
                let finalTransformedObj = transformPayload(payload, referenceData);

                res.status(200).send(finalTransformedObj);
            } catch (e) {
                next(e);
            }
        });



module.exports = router;


