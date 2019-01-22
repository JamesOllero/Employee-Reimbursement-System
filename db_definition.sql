create schema project_1 authorization csoberg;
commit;

create table ers_reimbursement_status (reimb_status_id integer primary key not null, reimb_status varchar(10) not null);
create table ers_reimbursement_type (reimb_type_id integer primary key not null, reimb_type varchar(10) not null);
create table ers_user_roles (ers_user_role_id integer primary key not null, user_role varchar(10) not null);
commit;

create table ers_users (ers_users_id serial primary key not null,
ers_username varchar(50) unique not null,
ers_password varchar(50) not null,
user_first_name varchar(100) not null,
user_last_name varchar(100) not null,
user_email varchar(150) unique not null,
user_role_id integer not null,
foreign key (user_role_id) references ers_user_roles(ers_user_role_id));
commit;

create table project_1.ers_reimbursement (reimb_id serial primary key not null,
reimb_amount decimal(10,2) not null,
reimb_submitted date not null,
reimb_resolved date,
reimb_description varchar(250),
reimb_reciept_title varchar(50),
reimb_reciept bytea,
reimb_author integer not null,
reimb_resolver integer,
reimb_status_id integer not null,
reimb_type_id integer not null,
foreign key (reimb_author) references project_1.ers_users(ers_users_id),
foreign key (reimb_resolver) references project_1.ers_users(ers_users_id),
foreign key (reimb_status_id) references project_1.ers_reimbursement_status(reimb_status_id),
foreign key (reimb_type_id) references project_1.ers_reimbursement_type(reimb_type_id));
commit;

insert into ers_reimbursement_status (reimb_status_id, reimb_status) values (0, 'Pending'), (1, 'Approved'), (2, 'Denied');
insert into ers_reimbursement_type (reimb_type_id, reimb_type) values (0, 'Lodging'), (1, 'Travel'), (2, 'Food'), (3, 'Other');
insert into ers_user_roles (ers_user_role_id, user_role) values (0, 'Employee'), (1, 'Manager');
commit;

insert into ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) values ('jdollero', 'password1', 'James', 'Ollero', 'james.d.ollero@outlook.com', 0), ('csoberg', 'password1', 'Christopher', 'Oberg', 'oberg.chris@yahoo.com', 0), ('aduet', 'password1', 'August', 'Duet', 'aduet@revature.com', 1), ('dfay', 'password1', 'David', 'Fay', 'dfay@revature.com', 1);
commit;

insert into project_1.ers_reimbursement (reimb_amount, reimb_submitted, reimb_resolved, reimb_description, reimb_author, reimb_resolver, reimb_status_id, reimb_type_id) values (110.00, date '2018-12-22', null, 'IQ Apartment Rent', 1, null, 0, 0), (250.00, date '2019-01-05', date '2019-01-06', null, 2, 3, 2, 3), (22.00, date '2019-01-05', date '2019-01-06', 'Company Lunch', 1, 4, 1, 2);
commit;

drop table project_1.ers_reimbursement;
commit;