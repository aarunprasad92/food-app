import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export function getMealById(slug) {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    return meal;
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    meal.image = `/images/${filename}`;

    db.prepare(`
        INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
        VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `).run(meal);
}