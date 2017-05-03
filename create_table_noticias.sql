CREATE SEQUENCE public.noticias_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE public.noticias_id_seq
  OWNER TO rfdev_pg;

CREATE TABLE public.noticias
(
  id integer NOT NULL DEFAULT nextval('noticias_id_seq'::regclass),
  titulo character varying(100) NOT NULL,
  noticia text NOT NULL,
  created_at timestamp without time zone NOT NULL,
  updated_at timestamp without time zone NOT NULL,
  CONSTRAINT noticias_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.noticias
  OWNER TO rfdev_pg;