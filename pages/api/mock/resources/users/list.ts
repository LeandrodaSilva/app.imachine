// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User, UserList } from "../../../../../types";

const Users: Array<UserList> = [
  {
    id: 1,
    company_id: 2,
    email: "usuario@email.com",
    permission_level: 1,
    user: "Nome do usuário",
  },
  {
    id: 2,
    company_id: 2,
    email: "usuario@email.com",
    permission_level: 2,
    user: "Nome do usuário",
  },
  {
    id: 3,
    company_id: 2,
    email: "usuario@email.com",
    permission_level: 2,
    user: "Nome do usuário",
  },
  {
    id: 4,
    company_id: 2,
    email: "usuario@email.com",
    permission_level: 1,
    user: "Nome do usuário",
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({
      results: [
        {
          data: [
            {
              users: Users,
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
