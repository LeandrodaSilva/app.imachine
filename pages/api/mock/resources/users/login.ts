// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const Users = [
  {
    user: "Usuário",
    access_token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTk2MjczODAsIm5iZiI6MTYxOTYyNzM4MCwianRpIjoiMzViM2VjZmMtZTJiMS00MTNkLWFiOTMtNGFlODNjZjNkYzQ3IiwiZXhwIjoxNjE5ODg2NTgwLCJpZGVudGl0eSI6OSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsiY29tcGFueV9pZCI6MiwicGVybWlzc2lvbl9sZXZlbCI6MX19.qda9ZjVlctMO04ernsheWw9MA5levSXhiOZILs3O4dY",
    email: "usuario@email.com",
    image:
      "base64djsakldasidjiasuiweqeklecdbsuueryreisdopadiodasopdidiopsaopdiufdios",
    permission_level: 1,
    user_id: 9,
    company: {
      company_id: 2,
      company_name: "Empresa1",
    },
  },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const user = Users.filter((user) => user.email === req.body.email)[0];

    res.status(200).json({
      results: [
        {
          data: [user],
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
