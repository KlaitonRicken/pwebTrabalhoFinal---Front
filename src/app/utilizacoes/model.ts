export class Utilizacao{
  id: number;
  data: string;
  hora: string;
  kmInicial: number;
  kmFinal: number;
  veiculo_id = new Veiculo();
  funcionario_id = new Funcionario();
}

export class Funcionario{
  id: number;
  nome: string;
}

export class Veiculo{
  id: number;
  ano: number;
  placa: string;
  marca: string;
  modelo: string;
}
