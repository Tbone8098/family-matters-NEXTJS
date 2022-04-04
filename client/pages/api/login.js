import { NextApiRequest, NextApiResponse } from "next";

export default function (req, res) {
    console.log(req.body);
    res.status(200).json({
        message: "Hello World",
    });
}