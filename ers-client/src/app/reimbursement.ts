export class Reimbursement {
  id: number;
  amount: number;
  submitted: Date;
  resolved: Date;
  description: string;

  author: number;
  resolver: number;
  status: string;
  type: string;
}
