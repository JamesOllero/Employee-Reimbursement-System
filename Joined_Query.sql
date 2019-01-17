select reimb_id as Id,
reimb_amount as Amount,
reimb_submitted as Submitted,
reimb_resolved as Resolved,
reimb_description as Description,
author.user_first_name as Author_First_Name,
author.user_last_name as Author_Last_Name,
resolver.user_first_name as Resolver_First_Name,
resolver.user_last_name as Resolver_Last_Name,
ers_reimbursement_status.reimb_status as Status,
ers_reimbursement_type.reimb_type as Reimbursement_Type
from ers_reimbursement
left join ers_users as author on ers_reimbursement.reimb_author=author.ers_users_id
left join ers_users as resolver on ers_reimbursement.reimb_resolver=resolver.ers_users_id
left join ers_reimbursement_status on ers_reimbursement.reimb_status_id=ers_reimbursement_status.reimb_status_id 
left join ers_reimbursement_type on ers_reimbursement.reimb_type_id=ers_reimbursement_type.reimb_type_id;