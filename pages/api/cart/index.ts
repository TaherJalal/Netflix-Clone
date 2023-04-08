import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import authUser from "../../../helper/authuser";
import getMovie from "@/helper/getmovie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers["authorization"] as string;

  if (!token) {
    res.status(401).send("UnAuthorized");
  }

  if (req.method !== "GET") {
    res.status(401).send("Not A GET Request");
  }

  const { id } = await authUser(token);

  const {cart,balance} = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
    include:{
      cart: true
    }
  });

  const cartMovies = await Promise.all(cart?.moviesIDs.map(async (movie) => await getMovie(movie))!)

  res.json({
    userCart: cartMovies,
    userBalance: balance,
  });
}


