create table T_Ingredient
(
  id  int not null
    primary key,
  nom varchar(40)
    unique
)
go

create table T_Ingredient_param
(
  id              int not null
    primary key,
  qte_theorique   smallint,
  qte_reel        smallint,
  difference      smallint,
  ingredient_ID   int
    references T_Ingredient,
  recupSession_ID int,
  livraison_ID    int
)
go

create table T_Machine
(
  id       tinyint not null
    primary key,
  capacite smallint
)
go

create table T_Nourriture
(
  id  tinyint not null
    primary key,
  nom varchar(40)
)
go

create table T_Formule
(
  pourcentage   float,
  nourriture_ID tinyint
    references T_Nourriture,
  ingredient_ID int
    references T_Ingredient,
  id            tinyint not null
    primary key
)
go

create table T_Periode_alimentation
(
  id      tinyint not null
    primary key,
  periode varchar(20)
)
go

create table T_TypePaddock
(
  id   tinyint not null
    primary key,
  type varchar(20)
)
go

create table T_Paddock
(
  id          tinyint not null
    primary key,
  nom         varchar(20),
  typePaddock tinyint
    references T_TypePaddock
)
go

create table T_Animal
(
  snit       int not null
    primary key,
  paddock_ID tinyint
    references T_Paddock
)
go

create table T_User
(
  login    varchar(40) not null
    primary key,
  password varchar(20)
)
go

create table T_Mesure
(
  id         int not null
    primary key,
  poids      smallint,
  dateMesure date,
  user_login varchar(40)
    references T_User,
  animal_ID  int
    references T_Animal
)
go

create table T_Mouvement
(
  id           int not null
    primary key,
  dateMvnt     date,
  paddock_src  tinyint
    references T_Paddock,
  paddock_dest tinyint
    references T_Paddock,
  animal_ID    int
    references T_Animal,
  user_login   varchar(40)
    references T_User,
  mesure_ID    int
    references T_Mesure
)
go

create table T_Session_alimentation
(
  id         int not null
    primary key,
  date       date,
  user_login varchar(40)
    references T_User
)
go

create table T_Detail_session_alimnt
(
  id                      int not null
    primary key,
  note                    tinyint,
  nbrVache                tinyint,
  commentaire             varchar(1),
  paddock_ID              tinyint
    references T_Paddock,
  session_alimentation_ID int
    references T_Session_alimentation
)
go

create table T_Recup_sessionAlimnt
(
  id                int not null
    primary key,
  nbrPreparation    smallint,
  qteTotal          tinyint,
  nourriture_ID     tinyint
    references T_Nourriture,
  sessionAlimnt_ID  int
    references T_Session_alimentation,
  ingredienParam_ID int
    references T_Ingredient_param,
  machine_ID        tinyint
    references T_Machine
)
go

alter table T_Ingredient_param
  add foreign key (recupSession_ID) references T_Recup_sessionAlimnt
go

create table T_Livraison
(
  id                     int not null
    primary key,
  recup_sessionAlimnt_ID int
    references T_Recup_sessionAlimnt
)
go

alter table T_Ingredient_param
  add foreign key (livraison_ID) references T_Livraison
go

create table T_Periode_Ration
(
  id                     int not null
    primary key,
  quantite               smallint,
  moy_qte_vache          float,
  detailAlimentation_ID  int
    references T_Detail_session_alimnt,
  nourriture_ID          tinyint
    references T_Nourriture,
  periodeAlimentation_ID tinyint
    references T_Periode_alimentation,
  livraison_ID           int
    references T_Livraison
)
go


