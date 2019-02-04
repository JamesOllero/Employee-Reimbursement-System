export class Reimbursement {
  id: number;
  amount: number;
  description: string;
  filename: string;
  reciept: null;
  authorId: number;
  authorName: string;
  authorFirstName: string;
  authorLastName: string;
  resolverId: number;
  resolverName: string;
  resolverFirstName: string;
  resolverLastName: string;
  status: string;
  type: string;
  submitted: Date;
  resolved: Date;
}

