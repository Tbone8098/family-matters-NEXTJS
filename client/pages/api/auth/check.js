import { prisma } from "@/lib/prisma";
import { bcrypt } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req, res) {

    const {email, password} = req.body

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    let isValid = await bcrypt.compare(password, user.password)
    
    if (isValid){
        res.status(200).json(user);

    }

    res.status(401).json({
        msg: "failed to log in"
    })
}