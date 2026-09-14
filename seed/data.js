const titles = [
  'Sunrise Ridge', 'Pine Hollow', 'Blue Lake', 'Cedar Point', 'Meadow View',
  'Granite Creek', 'Whispering Pines', 'River Bend', 'Stone Trail', 'Redwood Camp',
  'Silver Creek', 'Mossy Falls', 'Boulder Valley', 'Lakeview Retreat', 'Willow Creek',
  'Wildflower Hill', 'Maple Grove', 'Canyon Mesa', 'Echo Valley', 'Fern Trail',
  'Prairie Haven', 'Hawk Nest', 'Coyote Run', 'Juniper Point', 'Golden Meadow',
  'Raven Ridge', 'Trout Spring', 'Hidden Cove', 'Summit Pass', 'Amber Woods',
  'Moonlight Basin', 'Sagebrush Camp', 'Forest Edge', 'Glen Brook', 'Peakside Camp',
  'Lakeshore Landing', 'North Fork', 'Crystal Ridge', 'Bayside Camp', 'Clover Field',
  'Mountain Lantern', 'Larkspur Camp', 'Pinecrest', 'Deer Run', 'Sierra Dunes',
  'Hollow Creek', 'Aspen Vista', 'Riverstone', 'Oak Valley', 'Highland Trail',
  'Dawn Point', 'Brookside', 'Fireside Grove', 'Misty Ridge', 'Evergreen Cove',
  'Lode Star', 'Crescent Lake', 'Rustic Valley', 'Cattail Point', 'Sunset Ranch',
  'Eagle Harbor', 'Thunder Creek', 'Orchard Camp', 'Miller Ridge', 'Quiet Bay',
  'Timberline', 'Buttercup Field', 'Winding Creek', 'Ponderosa Park', 'Spruce Haven',
  'Cascade Loop', 'Stone Pine', 'Valley of Ferns', 'Cloudbreak Camp', 'Sandstone Reach',
  'Sierra Bloom', 'Camp Horizon', 'Starlight Point', 'Harbor Pines', 'Sage Valley',
  'Old Cedar', 'Shining Lake', 'Black Bear Camp', 'Wolf Creek', 'Fox Ridge',
  'Hummingbird Hill', 'Broadwater', 'Milepost Camp', 'Fawn Creek', 'Canyon Springs',
  'Wild Mesa', 'Pine & Pine', 'Ridgewater', 'Lagoon Trail', 'Briar Point',
  'Woodsong', 'Rising Sun', 'Rainy Creek', 'Lake Ember', 'Atlas Camp'
];

const locations = [
  'Colorado', 'Montana', 'Utah', 'Oregon', 'California', 'Arizona', 'New Mexico',
  'Wyoming', 'Idaho', 'Washington', 'Nevada', 'Alaska', 'Texas', 'Tennessee',
  'North Carolina', 'Georgia', 'Virginia', 'Maine', 'Michigan', 'Minnesota',
  'Wisconsin', 'Colorado Springs', 'Yellowstone', 'Moab', 'Bend', 'Big Sur',
  'Sedona', 'Santa Fe', 'Jackson Hole', 'Boise', 'Olympic Peninsula', 'Lake Tahoe',
  'Anchorage', 'Austin', 'Chattanooga', 'Asheville', 'Savannah', 'Shenandoah',
  'Acadia', 'Traverse City', 'Duluth', 'Madison', 'Grand Teton', 'Sun Valley',
  'Seattle', 'Reno', 'Fairbanks', 'Houston', 'Nashville', 'Bristol', 'Portland',
  'Flagstaff', 'Santa Barbara', 'Durango', 'Yellowstone Park', 'Bend Oregon',
  'Crescent City', 'Laramie', 'Coeur d\'Alene', 'Spokane', 'Riverton', 'Leadville',
  'Boulder', 'Pueblo', 'Taos', 'Las Vegas', 'Tucson', 'Gila Bend', 'Prescott',
  'Monterey', 'Bishop', 'Klamath Falls', 'Palm Springs', 'Kenai', 'Pine Bluff',
  'Huntsville', 'Bluff', 'Pagosa Springs', 'Mammoth Lakes', 'Baker', 'Moulton'
];

const baseDescriptions = [
  'A peaceful campground with shaded sites, clean restrooms, and easy access to hiking trails.',
  'Perfect for stargazers, this spot offers wide-open views, fresh air, and quiet evenings by the fire.',
  'Enjoy a scenic getaway with streamside camping, picnic tables, and nearby fishing opportunities.',
  'This family-friendly campground features spacious tent sites, mountain views, and a welcoming atmosphere.',
  'Set near a lake, this area is ideal for kayaking, sunrise walks, and relaxing after a long day outdoors.',
  'A rustic destination tucked beneath tall pines, offering a calm setting for campers and hikers alike.',
  'Camp beneath towering trees and wake up to crisp air, soft birdsong, and panoramic mountain scenery.',
  'This campground is known for its comfortable sites, nearby trails, and excellent night skies.',
  'A favorite stop for road trippers, with convenient amenities and beautiful natural surroundings.',
  'Bring your tent or RV and enjoy a quiet retreat surrounded by forests, cliffs, and wildlife.',
  'A great base for exploring local viewpoints, waterfalls, and backcountry paths.',
  'This site blends convenience with nature, giving campers access to both trails and relaxing open space.'
];

const descriptionExtras = Array.from({ length: 100 }, (_, index) => {
  const moods = [
    'Ideal for slow mornings and peaceful afternoons.',
    'Perfect for travelers who enjoy a quiet, scenic stop.',
    'Made for campers who want comfort and nature in one place.',
    'A great choice for families looking for a simple getaway.',
    'Wonderful for hikers who want trails nearby and space to relax.',
    'A favorite for anyone who loves fresh air and starry skies.',
    'Best for campers who enjoy a mix of adventure and downtime.',
    'Perfect for reconnecting with nature without sacrificing convenience.',
    'A lovely place to unwind after a long day of exploring.',
    'Ideal for both first-time campers and seasoned outdoor lovers.'
  ];

  const activities = [
    'You can spend the day fishing, walking, and soaking in the view.',
    'You will find great spots for photography, wildlife watching, and easy hikes.',
    'The area is great for campfire evenings, sunrise walks, and relaxed afternoons.',
    'Visitors can enjoy nearby trails, quiet water, and plenty of open space.',
    'It is a strong base for exploring local landmarks and hidden scenic routes.',
    'You will love the nearby overlooks, picnic areas, and gentle outdoor adventures.',
    'The setting is perfect for quiet reflection, stargazing, and short nature walks.',
    'Campers can make the most of the surroundings with kayaking, relaxing, and exploring.',
    'The site offers a smooth balance of comfort, scenery, and easy outdoor access.',
    'It is a welcoming place for gathering, unwinding, and enjoying the landscape.'
  ];

  const amenities = [
    'Clean facilities and friendly surroundings make the stay easy.',
    'Helpful amenities and thoughtful layout keep the experience comfortable.',
    'Everything feels easy to access, from parking to the nearby trails.',
    'The site is well kept and offers a relaxing, low-stress environment.',
    'You can expect a smooth stay with roomy sites and welcoming service.',
    'The area is organized, scenic, and convenient for both tents and RVs.',
    'Campers will appreciate the clean setup and easy overall flow.',
    'The location combines convenience with a calm, natural atmosphere.',
    'It is a dependable stop for a restful stay in the outdoors.',
    'The campground brings together comfort, scenery, and a laid-back vibe.'
  ];

  return `${moods[index % moods.length]} ${activities[(index * 2) % activities.length]} ${amenities[(index * 3) % amenities.length]}`;
});

const descriptions = Array.from({ length: 100 }, (_, index) => `${baseDescriptions[index % baseDescriptions.length]} ${descriptionExtras[index]}`);

const imageBase = 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80';

const sampleCampgrounds = Array.from({ length: 100 }, (_, index) => ({
  title: titles[index],
  location: locations[index],
  price: 20 + ((index * 7) % 55),
  description: descriptions[index],
  image: `${imageBase}&sig=${index + 1}`
}));

module.exports = sampleCampgrounds;
