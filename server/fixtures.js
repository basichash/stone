if (Posts.find().count() ==0) {
  Posts.insert({
    title: 'Introduction Telescope',
    author: 'Sacha Graif',
    url: 'http://sachagreif.com/introducing-telescope'
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  });
}