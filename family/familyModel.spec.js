const db = require('../data/dbConfig');
const Family = require('./familyModel');

beforeEach(async () => {
   await db('family').truncate();
});

describe('create or remove Family members', () => {
   it('is able to add a Family member to the db!', async () => {
      let family = await Family.get();
      expect(family).toHaveLength(0);

      // set up
      await Family.insert({ name: 'Emeka', relationship: 'cousin' });
      await Family.insert({ name: 'Chisom', relationship: 'cousin' });
      family = await Family.get();

      // assertion
      expect(family).toHaveLength(2);
   });

   it('is able to remove a Family member from the db', async () => {
      // sanity: checking that trucate works, essentially
      let family = await Family.get();
      expect(family).toHaveLength(0);

      // set up
      await Family.insert({ name: 'Emeka', relationship: 'cousin' });
      await Family.insert({ name: 'Chisom', relationship: 'cousin' });
      await Family.remove(1)
      
      family = await Family.get()
      expect(family).toHaveLength(1);
   });
});