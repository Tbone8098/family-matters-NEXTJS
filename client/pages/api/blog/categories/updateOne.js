import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {
    const { id, name } = JSON.parse(req.body);
    const results = await prisma.category.update({
        where: {
            id: id
        },
        data: {
            name: name
        }
    })
    if (results){
        res.status(200).json(results);
    } else {
        console.log("failed to create category");
        res.status(401).json({msg:"failed to create category"})
    }
  }
  