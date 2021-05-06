export interface Company {
  company_id: number;
  company_name: string;
}

export interface User {
  user_id: number;
  user: string;
  email: string;
  company: Company;
  image: string;
  permission_level: number;
  access_token: string;
}

export interface UserList {
  id: number;
  user: string;
  email: string;
  permission_level: number;
  company_id: number,
}

export interface Warning {
  id: number;
  name: string;
  color: "amarelo" | "azul" | "verde" | "vermelho";
  factory: string;
  sector: string;
  timestamp: string;
}
