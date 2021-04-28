// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    res.status(200).json({
      results: [
        {
          data: [],
          message: "Ok",
          metaInfo: {
            apiVersion: "1.0.0",
            timestamp: "2020-10-26 13:21:50"
          }
        }
      ],
      statusCode: 200
    })
  } else {
    res.status(404).json({
      message: "Método não permitido"
    })
  }
}
