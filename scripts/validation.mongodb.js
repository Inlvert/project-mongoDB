db.createCollection('book', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ['bookTitle', 'pages', 'autor'],
      properties: {
        bookTitle: {
          bsonType: 'string',
          description: 'Book title must be < 100',
          maxLength: 100
        },
        pages: {
          bsonType: 'int',
          minimum: 1
        },
        prise: {
          bsonType: 'number',
          minimum: 0
        },
        autor: {
          bsonType: 'object',
          required: ['name'],
          properties: {
            name: {
              bsonType: 'string'
            },
            isMale: {
              bsonType: 'bool'
            }
          }
        },
        languages: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          },
          minItems: 1,
          uniqueItems: true
        }
      }
    }
  }
});


db.books.insertMany([
  {
    bookTitle: 'First book',
    pages: 150,
    autor: {
      name: 'Test Testovich',
      isMale: true
    }
  },
  {
    bookTitle: 'Second book',
    pages: 250,
    prise: 42.99,
    autor: {
      name: 'Test2 Testovich2',
      isMale: true
    }
  },
  {
    bookTitle: 'Third book',
    pages: 1350,
    autor: {
      name: 'Test3 Testovich3',
      isMale: true
    },
    languages: ['UA', 'EN']
  },
])


db.createCollection('companies', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['companyName', 'address'],
      properties: {
        companyName: {
          bsonType: 'string',
          description: 'Сompany тame must be less than 100 letters',
          maxLength: 100
        },
        since: {
          bsonType: 'date'
        },
        address: {
          bsonType: 'object',
          required: ['country', 'phoneNumber'],
          properties: {
            country: {
              bsonType: 'string',
            },
            city: {
              bsonType: 'string'
            },
            phoneNumber: {
              bsonType: 'number'
            }
          }
        }
      }
    }
  }
});


db.companies.insertMany([
  {
    companyName: 'Name1',
    address: {
      country: 'Ukraine',
      phoneNumber: 12212548
    }
  },
  {
    companyName: 'Name2',
    address: {
      country: 'Ukraine',
      phoneNumber: 12212548
    }
  },
  {
    companyName: 'Name1',
    address: {
      country: 'Ukraine',
      city: 'kyiv',
      phoneNumber: 12212548
    }
  },
])

db.companies.find()

db.createCollection('workers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'companyId'],
      properties: {
        name: {
          bsonType: 'string'
        },
        department: {
          bsonType: 'string'
        },
        slary: {
          bsonType: 'number'
        },
        companyId: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.workers.insertMany([
  {
    name: 'Worker 1',
    companyId: new ObjectId('660e6cc9a98cb89b83783bb1')
  },
  {
    name: 'Worker 2',
    companyId: new ObjectId('660e7c4727b4a9382d28cab2')
  },
  {
    name: 'Worker 3',
    companyId: new ObjectId('660e6cc9a98cb89b83783bb1')
  },
  {
    name: 'Worker 4',
    companyId: new ObjectId('660e7c4727b4a9382d28cab3')
  },
  {
    name: 'Worker 5',
    companyId: new ObjectId('660e7c4727b4a9382d28cab4')
  },
  {
    name: 'Worker 6',
    companyId: new ObjectId('660e6cc9a98cb89b83783bb1')
  },
  {
    name: 'Worker 7',
    companyId: new ObjectId('660e7c4727b4a9382d28cab2')
  },
  {
    name: 'Worker 8',
    companyId: new ObjectId('660e6cc9a98cb89b83783bb1')
  },
  {
    name: 'Worker 9',
    companyId: new ObjectId('660e7c4727b4a9382d28cab3')
  },
  {
    name: 'Worker 10',
    companyId: new ObjectId('660e7c4727b4a9382d28cab4')
  }
]);


db.workers.aggregate([
  {
    $lookup: {
      from: 'companies',
      localField: 'companyId',
      foreignField: '_id',
      as: 'company'
    }
  },
  {
    $unwind: '$company'
  },
  {
    $unset: ['companyId', 'address.phoneNumber']
  }
])

db.companies.aggregate([
  {
    $lookup: {
      from: 'workers',
      localField: '_id',
      foreignField: 'companyId',
      as: 'workers'
    }
  },
  {
    $unwind: '$workers'
  },
  {
    $group: {
      _id: 'name',
      workersAmount: {
        $count: {}
      }
    }
  }
]);