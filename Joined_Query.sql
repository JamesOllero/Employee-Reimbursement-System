select reimb_id as id, reimb_amount as amount, reimb_submitted as submitted, reimb_resolved as resolved, reimb_description as description, reimb_reciept_title, reimb_reciept as reciept, author.ers_users_id as author_id, author.ers_username as author_username, author.user_first_name as author_first_name, author.user_last_name as author_last_name, author.user_email as author_email, author_role.user_role as author_role_type, resolver.ers_users_id as resolver_id, resolver.ers_username as resolver_username, resolver.user_first_name as resolver_first_name, resolver.user_last_name as resolver_last_name, resolver.user_email as resolver_email, resolver_role.user_role as resolver_role_type, project_1.ers_reimbursement_status.reimb_status as status, project_1.ers_reimbursement_type.reimb_type as reimbursement_type from project_1.ers_reimbursement left join project_1.ers_users as author on project_1.ers_reimbursement.reimb_author=author.ers_users_id left join project_1.ers_user_roles as author_role on author.user_role_id=author_role.ers_user_role_id left join project_1.ers_users as resolver on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id left join project_1.ers_user_roles as resolver_role on resolver.user_role_id=resolver_role.ers_user_role_id left join project_1.ers_reimbursement_status on project_1.ers_reimbursement.reimb_status_id=project_1.ers_reimbursement_status.reimb_status_id left join project_1.ers_reimbursement_type on project_1.ers_reimbursement.reimb_type_id=project_1.ers_reimbursement_type.reimb_type_id order by id asc;


select reimb_id as id,
reimb_amount as amount,
reimb_submitted as submitted,
reimb_resolved as resolved,
reimb_description as description,
reimb_reciept_title as reciept_name,
reimb_reciept as reciept,
author.ers_users_id as author_id,
author.ers_username as author_username,
author.ers_password as author_password,
author.user_first_name as author_first_name,
author.user_last_name as author_last_name,
author.user_email as author_email,
author_role.user_role as author_role_type,
resolver.ers_users_id as resolver_id,
resolver.ers_username as resolver_username,
resolver.ers_password as resolver_password,
resolver.user_first_name as resolver_first_name,
resolver.user_last_name as resolver_last_name,
resolver.user_email as resolver_email,
resolver_role.user_role as resolver_role_type,
project_1.ers_reimbursement_status.reimb_status as status,
project_1.ers_reimbursement_type.reimb_type as reimbursement_type
from project_1.ers_reimbursement
left join project_1.ers_users as author
on project_1.ers_reimbursement.reimb_author=author.ers_users_id

left join project_1.ers_users as resolver
on project_1.ers_reimbursement.reimb_resolver=resolver.ers_users_id
left join 





select ers_users_id as id,ers_username as username,ers_password as password,user_first_name as firstname,user_last_name as lastname,user_email as email,project_1.ers_user_roles.user_role as userrole,project_1.ers_user_status.user_status as activestatus from project_1.ers_usersleft join project_1.ers_user_roles on project_1.ers_users.user_role_id=project_1.ers_user_roles.ers_user_role_id left join project_1.ers_user_status on project_1.ers_users.user_status_id=project_1.ers_user_status.user_status_id where user_email = ?