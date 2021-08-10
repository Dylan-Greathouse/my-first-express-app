const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the videogames endpoint', async () => {
    const response = await request.get('/videogames');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets the videogames item 1 endpoint', async () => {
    const response = await request.get('/videogames/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});

it('gets the videogames item 2 endpoint', async () => {
    const response = await request.get('/videogames/2');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[1]);
});