# TrustLoop MVP Development Document

## 1. Project Brief

### 1.1. Objective
TrustLoop is a mobile-first app for requesting and offering **help** within a socially trusted network. Unlike gig platforms, TrustLoop revolves around favors and connections. Every favor can be traced through a relationship path, like *"my mother's friend"* or *"my colleague's cousin"*. Users track who helped whom and how connections evolve.

### 1.2. Target Users
- **Requesters** – individuals seeking help
- **Helpers** – individuals who offer to fulfill tasks
- **Indirect Connectors** – users connected via mutual trusted relationships (multi-hop)

---

## 1.3. Tech Stack

- **Frontend:** React Native + Expo + TypeScript  
- **Backend:** Supabase (PostgreSQL, Auth, Storage)  
- **Authentication:** Supabase Auth (email, optional magic link)  
- **Notifications:** Expo Push Notifications  
- **Graph Utilities:** PostgreSQL recursive CTEs & cached contact path table  
- **UI Libraries:** ShadCN (React Native compatible)

---

## 1.4. Database Schema

### `users`
```sql
id UUID PRIMARY KEY,
name TEXT,
email TEXT UNIQUE,
profile_image_url TEXT,
bio TEXT,
created_at TIMESTAMP
```

### `relationships`
```sql
user_id UUID REFERENCES users(id),
contact_id UUID REFERENCES users(id),
relationship TEXT NOT NULL, -- e.g., "friend", "mother", "colleague"
introduced_by UUID REFERENCES users(id), -- optional
created_at TIMESTAMP,
PRIMARY KEY (user_id, contact_id)
```

### `contact_paths`
```sql
source_user_id UUID REFERENCES users(id),
target_user_id UUID REFERENCES users(id),
hop_count INTEGER CHECK (hop_count > 0),
path UUID[] NOT NULL, -- e.g., [me, mother_id, mother_friend_id]
created_at TIMESTAMP,
PRIMARY KEY (source_user_id, target_user_id)
```

### `favors`
```sql
id UUID PRIMARY KEY,
title TEXT,
description TEXT,
requester_id UUID REFERENCES users(id),
status TEXT CHECK (status IN ('open', 'in_progress', 'fulfilled')),
created_at TIMESTAMP
```

### `favor_progress`
```sql
id UUID PRIMARY KEY,
favor_id UUID REFERENCES favors(id),
helper_id UUID REFERENCES users(id),
status TEXT CHECK (status IN ('offered', 'accepted', 'passed_on')),
note TEXT,
updated_at TIMESTAMP
```

---

## 1.5. MVP Features

### 🔹 Favor Creation
- Any user can post a favor with title and description.
- Select visibility: direct contacts only or include known 2-hop connections.

### 🔹 Relationship Graph
- Users can view the chain of introduction for any contact.
- Favor displays path info like:  
  **“This request is from your friend’s aunt.”**

### 🔹 Help Flow
- Helpers can offer to help.
- Progress is tracked (status and notes).
- Favor can be handed off (e.g., "I can't help, but I know someone who can.")

### 🔹 Contact Management
- Add direct contacts and describe how you know them.
- System auto-computes contact paths and hop counts.
- Relationship chains shown in plain English.

---

## 1.6. User Flow

### 1.6.1. Welcome
- App intro and mission
- Sign up or log in

### 1.6.2. Dashboard
- Tabs: `Favors`, `My Favors`, `Connections`, `Profile`

### 1.6.3. Post Favor
- Enter what help is needed
- Choose visibility (direct, 2-hop, or public)

### 1.6.4. Favor Feed
- Sorted by proximity and trust path
- Each favor shows who requested it and the relationship chain

### 1.6.5. Offer Help
- View favor details
- Offer help or pass to another contact

### 1.6.6. Connections
- View and manage contacts
- Add relationship descriptions
- See multi-hop connections

---

## 1.7. MVP Focus Summary

✅ Establish trust-based help ecosystem  
✅ Let favors circulate via contact paths  
✅ Track multi-hop relationship chains  
✅ Simple, intuitive graph system (no bubbles)