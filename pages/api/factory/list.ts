// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import imageBase64 from "../../../utils/imageBase64";

type MetaInfo = {
  apiVersion: string;
  timestamp: string;
};

export type Factory = {
  factory_id?: number;
  factory_image?: string;
  factory_name?: string;
};

type Factorys = {
  factorys: Array<Factory>;
};

type Data = {
  data: Array<Factorys>;
  message: string;
  metaInfo: MetaInfo;
};

export type Results = {
  results: Array<Data>;
  statusCode: number;
};

export default (req: NextApiRequest, res: NextApiResponse<Results>) => {
  res.status(200).json({
    results: [
      {
        data: [
          {
            factorys: [
              {
                factory_id: 1,
                factory_image: imageBase64,
                factory_name: "Lycra",
              },
              {
                factory_id: 2,
                factory_image: imageBase64,
                factory_name: "Lycra 2",
              },
              {
                factory_id: 3,
                factory_image: imageBase64,
                factory_name: "Lycra 3",
              },
              {
                factory_id: 4,
                factory_image: imageBase64,
                factory_name: "Lycra 4",
              },
              {
                factory_id: 5,
                factory_image: imageBase64,
                factory_name: "Lycra 4",
              },
              {
                factory_id: 6,
                factory_image: imageBase64,
                factory_name: "Lycra 4",
              },
            ],
          },
        ],
        message: "Ok",
        metaInfo: {
          apiVersion: "1.0.0",
          timestamp: "2020-10-26 13:21:50",
        },
      },
    ],
    statusCode: 200,
  });
};
