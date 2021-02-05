CREATE TABLE gym.cities (
	name varchar(100) NOT NULL,
	code INT NOT NULL,
	CONSTRAINT cities_PK PRIMARY KEY (code)
);

CREATE TABLE gym.sites (
	name varchar(100) NOT NULL,
	code BIGINT auto_increment NOT NULL,
	city INT NOT NULL,
	CONSTRAINT sites_PK PRIMARY KEY (code),
	CONSTRAINT sites_FK FOREIGN KEY (city) REFERENCES gym.cities(code)
);

CREATE TABLE gym.users (
	email varchar(100) NOT NULL,
	password varchar(100) NOT NULL,
	admin BOOL DEFAULT false NOT NULL,
	id BIGINT auto_increment NOT NULL,
    site BIGINT NOT NULL,
	CONSTRAINT users_PK PRIMARY KEY (id),
    CONSTRAINT users_FK FOREIGN KEY (site) REFERENCES gym.sites(code)
);

INSERT INTO gym.cities
(name, code)
VALUES('Bogotá', 1);
INSERT INTO gym.sites
(name, city)
VALUES('SEDE 1 KENNEDY', 1);
INSERT INTO gym.users
(email, password, admin, site)
VALUES('williams@test.com', 'master', true, 1);
INSERT INTO gym.users
(email, password, admin, site)
VALUES('test@test.com', 'master', true, 0);