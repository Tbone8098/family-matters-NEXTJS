import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {
    const results = await prisma.category.findMany()

    if (results){
        res.status(200).json(results);
    } else {
        console.log("failed to get all category");
        res.status(401).json({msg:"failed to get all category"})
    }
  }
  