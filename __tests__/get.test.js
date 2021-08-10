const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the videogames endpoint', async () => {
    const response = await request.get('/videogames');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

// it('gets the systems endpoint', async () => {
//     const response = await request.get('/videogames/system');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(data);
// });
