var insects = [{
  name: 'Ant Nest Beetle',
  family: 'Carabidae',
  size: [6, 20],
  food: {
    eatsInsects: true,
    eatsDung: false,
    eatsPlants: false,
  },
  img: 'ant-nest-beetle.jpg'
}, {
  name: 'Dung Beetle',
  family: 'Scarabidae',
  size: [20, 30],
  food: {
    eatsInsects: false,
    eatsDung: true,
    eatsPlants: false,
  },
  img: 'dung-beetle.jpg'
}, {
  name: 'Stag Beetle',
  family: 'Lucanidae',
  size: [5, 120],
  food: {
    eatsInsects: false,
    eatsDung: false,
    eatsPlants: true,
  },
  img: 'stag-beetle.jpg'
}, {
  name: 'Tortoise Beetle',
  family: 'Cassidinae',
  size: [1, 18],
  food: {
    eatsInsects: false,
    eatsDung: false,
    eatsPlants: true,
  },
  img: 'tortoise-beetle.jpg'
},
];

// Create your variable here, name it `insects`

// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
