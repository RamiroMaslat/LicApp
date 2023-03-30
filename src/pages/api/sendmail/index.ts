import { NextApiRequest, NextApiResponse } from "next";
import { runCorsMiddleware } from "@/lib/middlewares";
import methods from "micro-method-router";
import { sendMail } from "@/lib/sendgrid";

 async function postHandler(req: NextApiRequest, res: NextApiResponse){

   try {
     const resp = await sendMail(req.body)
     console.log(resp);
     
     res.status(200).json({resp:"ok"})
   } catch (error) {
    res.status(500).json({error})
   }
   
  
  }

  const handler = methods({
    post: postHandler,
  })

  export default async (req: NextApiRequest, res: NextApiResponse) => {
    await runCorsMiddleware(req, res, handler);
  };