INSERT INTO story_project (story_project_id, story_project_name)
VALUES (1, 'Character Workshop');

INSERT INTO story_project (story_project_id, story_project_name)
VALUES (2, 'Example Project Name');

INSERT INTO actor_character (actor_character_id, age, dob, education, first_name, income, last_name, nationality, nick_name, occupation, place_of_birth, status, title, story_project_id)
VALUES (1, 50, null, 'Basic', 'Jon', '1million', 'Java', 'Roman Empire', 'jj', 'Centaurion', 'Rome', 'Elite', 'Sir', 1)

INSERT INTO actor_character_appearance (actor_character_appearance_id, build, eye_color, hair_color, level_of_grooming, wears_glasses, actor_character_id)
VALUES (1, 'Muscular', 'Blue', 'Black', 'Short Beard', TRUE, 1)