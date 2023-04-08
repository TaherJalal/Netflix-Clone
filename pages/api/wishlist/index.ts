import { NextApiRequest, NextApiResponse } from "next";
import {prisma} from '../../../lib/prisma'
import axios from "axios";
import authUser from "@/helper/authuser";
import getMovie from "@/helper/getmovie";

export default async function wishlistIndex(req: NextApiRequest, res: NextApiResponse){

    if(req.method !== "GET"){
        res.status(400).json({message : "Not A GET Request"})
    }

    const token = req.headers["authorization"]

    if(!token){
        res.status(401).json({message : "UnAuthorize"})
    }

    const {id} = await authUser(token as string)

    const {moviesIDs} = await prisma.wishlist.findUniqueOrThrow({
        where:{
            userID: id
        }
    })

    const wishlistMovies = await Promise.all(moviesIDs.map(async (movie) => await getMovie(movie)))

    res.json(wishlistMovies)
    
}