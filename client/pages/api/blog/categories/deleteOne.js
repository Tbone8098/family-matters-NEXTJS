import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {
    const { id } = JSON.parse(req.body)
    const results = await prisma.category.delete({
        where: {
            id: id
        }
    })

    if (results){
        res.status(200).json(results);
    } else {
        console.log("failed to get all category");
        res.status(401).json({msg:"failed to get all category"})
    }
  }
  