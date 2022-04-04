import { prisma } from "@/lib/prisma";


export default async function handler(req, res) {
    const { firstName, lastName, email, password, level } = JSON.parse(req.body);
    const results = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            password,
            level,
        }
    });
    res.status(200).json(results);
  }
  