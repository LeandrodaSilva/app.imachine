// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Warning } from "../../../../../types";

const Warnings: Array<Warning> = [
  {
    name: "Nome da máquina",
    timestamp: "2020-10-26 13:21:50",
    color: "vermelho",
    factory: "Campinas",
    sector: "Office",
    id: 1,
  },
  {
    name: "Nome da máquina",
    timestamp: "2020-10-26 13:21:50",
    color: "vermelho",
    factory: "Campinas",
    sector: "Office",
    id: 2,
  },
  {
    name: "Nome da máquina",
    timestamp: "2020-10-26 13:21:50",
    color: "vermelho",
    factory: "Campinas",
    sector: "Office",
    id: 2,
  },
  {
    name: "Nome da máquina",
    timestamp: "2020-10-26 13:21:50",
    color: "vermelho",
    factory: "Campinas",
    sector: "Office",
    id: 2,
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({
      results: [
        {
          data: [
            {
              machines: Warnings,
            },
          ],
        },
      ],
      statusCode: 200,
    });
  } else {
    res.status(404).json({
      message: "Método não permitido",
    });
  }
};
