const listRecipes = (z, bundle) => {
  z.console.log('Hello from a console log!');
  const promise = z.request('http://57b20fb546b57d1100a3c405.mockapi.io/api/recipes', {
    params: {
      style: bundle.inputData.style,
    }
  });
  return promise.then((res) => JSON.parse(res.content));
};

module.exports = {
  key: 'recipe',
  noun: 'Recipe',
  display: {
    label: 'New Recipe',
    description: 'Trigger when a new recipe is added.'
  },
  operation: {
    inputFields: [
      {key: 'style', type: 'string', required: false},
    ],
    perform: listRecipes
  }
};
