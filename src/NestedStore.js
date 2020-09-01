//practice for accessing data from nested datatypes
const STORE = {
  lists: [
    {
      id: '1',
      header: 'First list',
      cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
    },
    {
      id: '2',
      header: 'Second list',
      cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
    },
    {
      id: '3',
      header: 'Third list',
      cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    },
  ],
  allCards: {
    'a': { id: 'a', title:[{
      title: 'First card',
      second: 'Second Card',
      third: 'Third Card',
      thisIs: [{my: 'first', time:'pulling', from: 'an', arrayThis: 'nested'}]
    }],
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
    listsItem: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
    ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': {thisIs: [{my: 'second', time:'pulling', from: 'an', arrayThis: 'nested'}]},
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      },
    }
  },
}