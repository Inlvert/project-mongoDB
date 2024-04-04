db.users.insertOne({});

db.users.find();

// create

db.users.insertOne({
  email: 'testtest@mail.com',
  password: '12345admin',
  address: {
    country: 'UA',
    city: 'kiev'
  },
  phoneNumbers: [
    '0544210545',
    '04415442121',
    '874515748784'
  ],
  isMale:true
});

db.users.insertMany([
  { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
  { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
  { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])

db.inventory.insertMany([
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);

// read

db.inventory.find({status: "A"});

db.inventory.find({qty: {$in: [25, 50, 45]}});

db.inventory.find({qty: {$lt: 55}});

db.inventory.find({qty: {$gte: 50}});

db.inventory.find({qty: {$lte: 50}});

db.inventory.find({qty: {$ne: 50}});

db.inventory.find({item: {$in: [ "planner", "postcard" ]}});

db.inventory.find({'size.h': {$gte: 10 }});

db.inventory.find({'size.h': {$gte: 10 }, status: "D"});

db.inventory.find({$or: [{'size.h': {$gte: 10 }},{ status: "D"}]});

db.users.find({money: {$exists: true}});

//

db.inventory.find({qty: {$lte: 50}});
db.inventory.find({status: "A"});

db.inventory.find({
  $or: [
    {'size.w': {$gte: 16}},
    {'size.h': {lt: 16}}
  ]
});

db.users.find({email: {$exists: true}, password: {$exists: true}});

db.users.find({
  $or: [
    {email: {$exists: true}}, 
    {password: {$exists: true}}
  ]
});

db.inventory.drop();

db.inventory.insertMany( [
  { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
  { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
  { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
  { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
] );

db.inventory.updateMany({status: "A"}, {$set: {status: "AAA"}})

db.inventory.find()

db.inventory.updateMany({status: "P"}, {$set: {status: "PPP"}})

db.inventory.deleteMany({
  'size.uom': 'in'
})


db.inventory.updateMany({ $and: [{status: "P"}, {$set: {status: "PPP"}}, {status: "P"}, {$set: {status: "PPP"}}] })