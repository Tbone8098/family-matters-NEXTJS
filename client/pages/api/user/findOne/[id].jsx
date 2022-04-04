import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
    const {id} = parseInt(req.query)
    const results = await prisma.user.findFirst({
        where: {
            id: id,
        }
    });
    if (results){
        delete results.password
        res.send(results)
        // res.end()
    } else {
        res.status(401).json({msg: 'failed to fetch one user'})
    }
  }
  