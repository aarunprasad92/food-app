import sql from 'better-sqlite3';

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