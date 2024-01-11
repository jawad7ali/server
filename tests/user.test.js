const request = require('supertest');
const app = require('../src/app'); // Adjust this path to your Express app
const db = require('../src/database');

describe("GET /api/search/:userId/:query", () => {
  it("should return a list of users", async () => {
    const userId = 1;
      const query = 'test';
      
    db.all = jest.fn();

    // Mock response from db.all
    db.all.mockResolvedValue([
      { id: 1, name: 'Test User 1', connection: 1 },
      { id: 2, name: 'Test User 2', connection: 2 }
    ]);

    const response = await request(app).get(`/api/search/${userId}/${query}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      users: expect.any(Array)
    });
    expect(response.body.users).toHaveLength(2);
  });
});
