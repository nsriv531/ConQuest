
-- Step 1: Drop the tables if they already exist to start fresh
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS users;

-- Step 2: Create the users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 3: Create the projects table linked to the users table
CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(100) NOT NULL,
    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE  -- If a user is deleted, all their projects are deleted as well
);

-- Step 4: Create the tasks table linked to the projects table
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    task_description TEXT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('complete', 'in progress', 'not started')) DEFAULT 'not started',
    project_id INT,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project(project_id)
        ON DELETE CASCADE  -- If a project is deleted, all its tasks are deleted as well
);

-- Step 5: Insert sample users into the users table
INSERT INTO users (username, email, password)
VALUES
    ('user1', 'user1@example.com', 'conquest123'),
    ('user2', 'user2@example.com', 'conquest123'),
    ('user3', 'user3@example.com', 'conquest123');

-- Step 6: Insert sample projects linked to specific users

