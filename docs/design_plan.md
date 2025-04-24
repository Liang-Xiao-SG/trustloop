# TrustLoop MVP - Application Design Plan

## 1. Understanding the Core Concept

TrustLoop aims to be a mobile app facilitating help requests ("favors") within a trusted social network. The key differentiator is the emphasis on relationship paths (e.g., "friend's cousin") rather than anonymous gig work. The MVP focuses on establishing this trust-based ecosystem, allowing favors to circulate, and tracking relationship chains, based on the `trustloop_mvp_document.md`.

## 2. High-Level Architecture

Given the specified tech stack (React Native + Expo + TypeScript frontend, Supabase backend), the architecture is as follows:

*   **Frontend (React Native + Expo + TypeScript):**
    *   Handles all user interface elements and interactions.
    *   Uses React Navigation for screen transitions and tab management.
    *   Interacts with Supabase for data fetching, authentication, and storage.
    *   Manages application state (e.g., using Zustand, Redux Toolkit, or React Context API).
    *   Integrates Expo Push Notifications for real-time updates.
    *   Utilizes ShadCN UI components (adapted for React Native) for styling.
*   **Backend (Supabase):**
    *   **Database (PostgreSQL):** Stores user data, relationships, favors, and progress per the schema. The `contact_paths` table is crucial and likely populated/updated via database functions/triggers based on `relationships` changes.
    *   **Authentication:** Manages user sign-up, login, and sessions using Supabase Auth.
    *   **Storage:** Stores user profile images.
    *   **Database Functions/Triggers:** Essential for calculating and maintaining the `contact_paths` table efficiently (e.g., using recursive CTEs).

## 3. Key Application Modules & Screens

Based on MVP features and user flows:

*   **Authentication Module:**
    *   `LoginScreen`: Email/password or magic link login.
    *   `SignUpScreen`: User registration.
*   **Main Application (Tab Navigator):**
    *   **Favors Tab (`FavorFeedScreen`):**
        *   Displays a feed of favors visible to the user (direct, 2-hop).
        *   `FavorCard` component shows title, requester, relationship path.
        *   Tap into favor for details.
    *   **My Favors Tab (`MyFavorsScreen`):**
        *   Lists favors created by the user.
        *   Lists favors the user is helping with.
        *   Shows status.
    *   **Connections Tab (`ConnectionsScreen`):**
        *   Lists direct contacts and their relationship.
        *   Shows relationship path for introduced contacts.
        *   Action to add new contacts (`AddContactScreen`).
        *   Potentially shows 2nd-degree connections.
    *   **Profile Tab (`ProfileScreen`):**
        *   Displays user info (name, email, bio, image).
        *   Allows editing (`EditProfileScreen`).
        *   Settings (logout).
*   **Favor Module:**
    *   `CreateFavorScreen`: Form for title, description, visibility (direct, 2-hop).
    *   `FavorDetailScreen`: Full details, requester info, path. Actions: "Offer Help", "Pass On".
    *   `FavorProgressTracking`: Components to view/update status/notes.
*   **Contact Management Module:**
    *   `AddContactScreen`: Search/invite users. Define relationship. Record introducer.
    *   `ContactDetailScreen`: View contact profile (limited?) and relationship path.

## 4. User Flow Visualization (Mermaid)

```mermaid
graph TD
    A[Start App] --> B{User Logged In?};
    B -- No --> C[Auth Flow: Login/Sign Up];
    B -- Yes --> D[Dashboard (Tabs)];
    C --> D;

    subgraph Dashboard
        direction LR
        E[Favors Tab]
        F[My Favors Tab]
        G[Connections Tab]
        H[Profile Tab]
    end

    D --> E;
    D --> F;
    D --> G;
    D --> H;
    D -- Floating Action Button? --> I(Create Favor Screen);


    E --> J(Favor Feed Screen);
    J -- Select Favor --> K(Favor Detail Screen);
    K -- Offer Help --> L{Update Favor Progress};
    K -- Pass On --> M{Suggest Contact?};


    F --> N(My Favors Screen);
    N -- Select Favor --> K;


    G --> O(Connections List Screen);
    O -- Select Contact --> P(Contact Detail Screen);
    O -- Add Contact --> Q(Add Contact Screen);


    H --> R(Profile Screen);
    R -- Edit --> S(Edit Profile Screen);

    I -- Submit Favor --> J;
    L --> N;
    M --> O; # User might navigate to connections to find someone to pass to
    Q -- Add --> O;

```

## 5. File Cleanup Note

Default Expo template files like `HelloWave.tsx`, `ParallaxScrollView.tsx`, and default images can likely be removed during development. Focus is on building the core structure first.