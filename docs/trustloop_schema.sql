CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  profile_image_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE relationships (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  contact_id UUID REFERENCES users(id) ON DELETE CASCADE,
  relationship TEXT NOT NULL,
  introduced_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, contact_id)
);

CREATE TABLE contact_paths (
  source_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  target_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  hop_count INTEGER CHECK (hop_count > 0),
  path UUID[] NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (source_user_id, target_user_id)
);

CREATE TABLE favors (
  id UUID PRIMARY KEY,
  title TEXT,
  description TEXT,
  requester_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('open', 'in_progress', 'fulfilled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE favor_progress (
  id UUID PRIMARY KEY,
  favor_id UUID REFERENCES favors(id) ON DELETE CASCADE,
  helper_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('offered', 'accepted', 'passed_on')),
  note TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);