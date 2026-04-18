-- Corporación Panda — Schema inicial Supabase

-- Leads del formulario de contacto
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  company     text,
  service     text,
  message     text,
  status      text default 'nuevo' check (status in ('nuevo','contactado','cotizado','cerrado','perdido')),
  created_at  timestamptz default now()
);

-- Cartera de clientes (pública, solo lectura anon)
create table if not exists clients (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  logo_url    text,
  industry    text,
  testimonial text,
  active      boolean default true,
  sort_order  int default 0
);

-- Servicios (CMS básico)
create table if not exists services (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text unique not null,
  description text,
  icon        text,
  price_from  int,
  category    text,
  featured    boolean default false,
  sort_order  int default 0
);

-- Proyectos / portafolio
create table if not exists projects (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  client_id   uuid references clients(id),
  description text,
  tech_stack  text[],
  cover_url   text,
  published   boolean default false,
  created_at  timestamptz default now()
);

-- RLS
alter table leads    enable row level security;
alter table clients  enable row level security;
alter table services enable row level security;
alter table projects enable row level security;

-- Leads: solo insert público (anon puede crear, no leer)
create policy "anon puede insertar leads"
  on leads for insert to anon with check (true);

-- Clients: lectura pública de activos
create policy "lectura pública clientes"
  on clients for select using (active = true);

-- Services: lectura pública
create policy "lectura pública servicios"
  on services for select using (true);

-- Projects: lectura pública de publicados
create policy "lectura pública proyectos"
  on projects for select using (published = true);
