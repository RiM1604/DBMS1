CREATE table event(
e_name varchar(50),
eid varchar(20),
type varchar(20),
event_date date,
venue varchar(50),
primary key (eid));

CREATE table student(
roll varchar(20),
name varchar(100),
dept varchar(100),
password varchar(20),
primary key (roll));

CREATE table student_event(
    eid varchar(20),
    roll varchar(20),
    primary key (roll,eid),
    foreign key (roll) references student,
    foreign key (eid) references event);

CREATE table organizer(
    orgid varchar(20),
    password varchar(20),
    primary key(orgid));

CREATE table org_event(
    orgid varchar(20),
    eid varchar(20),
    primary key (orgid,eid),
    foreign key (orgid) references organizer,
    foreign key (eid) references event);

CREATE table admin(
    aid varchar(20),
    password varchar(20),
    primary key (aid));

CREATE table other(
    email varchar(40),
    password varchar(20),
    name varchar(20),
    college varchar(20),
    primary key (email));

CREATE table other_event(
    email varchar(40),
    eid varchar(20),
    primary key (email,eid),
    foreign key (email) references other,
    foreign key (eid) references event);

CREATE table volunteer(
    roll varchar(20),
    primary key (roll),
    foreign key (roll) references student);

INSERT INTO event VALUES ('Megaevent','1','socult','2024-01-28','sdjfgjsdg');
INSERT INTO student VALUES ('21CS10066', 'Sukanth', 'CSE','aahjhj');
INSERT INTO student_event VALUES ('1','21CS10066');
INSERT INTO organizer VALUES ('apple','aahjhj');
INSERT INTO org_event VALUES ('apple','1');
INSERT INTO admin VALUES ('admin','admin');
INSERT INTO other VALUES ('sukanth2705@gmail.com','dashgha','sukanth','IITKGP');
INSERT INTO other_event VALUES ('sukanth2705@gmail.com','1');
INSERT INTO volunteer VALUES ('21CS10066');

SELECT * FROM event;
SELECT * FROM student;
SELECT * FROM student_event;
SELECT * FROM organizer;
SELECT * FROM org_event;
SELECT * FROM admin;
SELECT * FROM other;
SELECT * FROM other_event;
SELECT * FROM volunteer;

DROP table student_event;
DROP table volunteer;
DROP table student;
DROP table org_event;
DROP table organizer;
DROP table admin;
DROP table other_event;
DROP table event;
DROP table other;