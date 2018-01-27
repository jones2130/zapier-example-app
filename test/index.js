const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('My App', () => {

  it('should load recipes', (done) => {
    const bundle = {
      style: 'mediterranean',
    };

    appTester(App.triggers.recipe.operation.perform, bundle)
      .then(res => {
        should(res.length).above(1);

        const firstRes = res[0];
        console.log('test results: ', firstRes);
        should(firstRes.name).eql('name 1');
        should(firstRes.directions).eql('directions 1');

        done();
      }).catch(done);
  });

});
