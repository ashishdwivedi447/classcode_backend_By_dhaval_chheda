

// MongoDB ---> It is a database management system which is used to store the data and retrieve the data.
// it is NO SQL (Non structured query language)
// so in sql if we defined the things we can't add more property in like --

// What is collection --->
// Ans : A collection in MongoDB is a group of documents that share a common schema or structure.A collection is similar to a table in a relational database, but it allows more flexibility and variety in the data types and formats. You can use a collection to store any kind of data, such as text, numbers,

// Name   class    category

// rakhi   10th     genaral

// kishan 12th      obc    
// now if want to add more more information like Religion then it can't be added but in mongoDB this can be added this is quite flexible.

// {
//     "Name":"ashish",
//     "class":10th,
//      category:general
// }

//  {
//      "Name":"ashish",
//     "class":10th,
//      category:general,
//     "Religion":"HINDU"    -----> extra thing added
//  }

// there are two types of scaling are there ---> 
// Vertical scaling and horizontal scaling are two ways of increasing the capacity and performance of a database system.
// Vertical scaling means adding more resources (such as CPU, RAM, or storage) to a single server, while horizontal scaling means adding more servers to a cluster and distributing the data and workload among them.
// Here are some differences between the two methods:

// Vertical scaling is easier to implement and manage, but horizontal scaling is more flexible and scalable.
// Vertical scaling has a limit on how much you can upgrade a single server, but horizontal scaling can add unlimited servers to the cluster.

// when should be use SQL and when should be use MongoDB ?

// Mongo: when I want alot of flexibility in schema and this doing a lot of instert operation.
// SQL : when we are working with transations and there are more read operation in database and database is structured.

// there are four things on mongoDB database ---->

// CRUD ---->  C--->Creating 
//             R ---> Read 
//             U ---> update 
//             D ---->Delete

// mongodb://127.0.0.1:27017

// mongodb ---> http protocol
// 127.0.0.1 ---> local host 
// 27017 --->port

// test> use students here use is used to create the database if it's available if not then students will get created.
// switched to db students
// students> db      here db is used to check in which database we are .
// students       ans---> we are in students database

// to check if there is any collections exist or not command is --> show collections.

// students> db.createCollection("users")   db.createCollection is used to create the collections and user is the collections name.
// { ok: 1 }
// students> show collections    show collections is used  to check which collections has been created and how mmany collections exist.
// users    ans is users.

// db.collection.drop(): This command drops the specified collection from the database.
// For example, to drop the collection called customers, you would use the following command:

// db.customers.drop()
// It is important to note that the db.collection.drop() command cannot be undone. If you drop a collection by mistake, you will need to recreate it from scratch. 
// db.dropDatabase(): This command drops the entire database, including all of its collections.
// students> db.dropDatabase()
// { ok: 1, dropped: 'students' }  like this

// if want to insert in the database first create databse if not exist and then collections then follow the commands
// ashish> db.user.insert({"name":"satish"})
// DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
// {
//   acknowledged: true,
//   insertedIds: { '0': ObjectId("64d8a6a119a500cb03882d48") }
// }

// if we want to insert more than one documents in the database then write json objects inside Array([])

// ashish> db.users.insert([{"name":"santi","city":"Rewa","age":29},{"name":"amir","age":29}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("64d8a90f19a500cb03882d49"),
//     '1': ObjectId("64d8a90f19a500cb03882d4a")
//   }
// }

// after inserting documents in the collections times comes to Read
// which is as follows--->
// ashish> db.users.find({}).pretty() here pretty() is used to look good nothing more than this.
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d49"),
//     name: 'santi',
//     city: 'Rewa',
//     age: 29
//   },
//   { _id: ObjectId("64d8a90f19a500cb03882d4a"), name: 'amir', age: 29 }
// ]
 // if we want to find any particular thing then we have to write this command --->

//  ashish> db.users.find({"name":"santi"})
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d49"),
//     name: 'santi',
//     city: 'Rewa',
//     age: 29
//   }
// ]

// if we want to find the one documents then the one will be provided which was inserted first if same key availble.

// ashish> db.users.findOne({"age":29})
// {
//   _id: ObjectId("64d8a90f19a500cb03882d49"),
//   name: 'santi',
//   city: 'Rewa',
//   age: 29
// }

// if we want to fetch something BY it's Id then command is --->
// ashish> db.users.find({"_id": ObjectId("64d8a90f19a500cb03882d4a")})
// [
//   { _id: ObjectId("64d8a90f19a500cb03882d4a"), name: 'amir', age: 29 }
// ]

//when we wanto to update the thind then we have pass two object one is to find and second is to update in second object set has to be used otherwise whatever name or something else will placed by the second parameter.
//  command is like this db.users.update({},{}) first object is for find the documents and second is to update.
// ashish> db.users.update({"name":"santi"},{$set:{"Religion":"Hindu"}})
// DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// ashish> db.users.find({}).prettry()
// TypeError: db.users.find({}).prettry is not a function
// ashish> db.users.find({}).pretty()
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d49"),
//     name: 'santi',
//     city: 'Rewa',
//     age: 29,
//     Religion: 'Hindu'
//   },
//   { _id: ObjectId("64d8a90f19a500cb03882d4a"), name: 'amir', age: 29 },
//   {
//     _id: ObjectId("64d8b964b8bec3ad75f91851"),
//     name: 'amir',
//     city: 'panvel'
//   }
// ]

// if two documents are same with same key then the one which was first inserted will be updated if we want both will be updated then update many will be used.

// ashish> db.users.updateMany({"name":"amir"},{$set:{"country":"India"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 2,
//   modifiedCount: 2,
//   upsertedCount: 0
// }
// ashish> db.users.find({}).pretty()
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d49"),
//     name: 'santi',
//     city: 'Rewa',
//     age: 29,
//     Religion: 'Hindu'
//   },
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d4a"),
//     name: 'amir',
//     age: 29,
//     country: 'India'
//   },
//   {
//     _id: ObjectId("64d8b964b8bec3ad75f91851"),
//     name: 'amir',
//     city: 'panvel',
//     country: 'India'
//   }
// ]

// if we want to update By it's ID then command is --->

// ashish> db.users.update({"_id": ObjectId("64d8a90f19a500cb03882d49")},{$set:{"Pacific":"Asia"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// ashish> db.users.find({}).pretty()
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d49"),
//     name: 'santi',
//     city: 'Rewa',
//     age: 29,
//     Religion: 'Hindu',
//     Pacific: 'Asia'
//   },
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d4a"),
//     name: 'amir',
//     age: 29,
//     country: 'India'
//   },
//   {
//     _id: ObjectId("64d8b964b8bec3ad75f91851"),
//     name: 'amir',
//     city: 'panvel',
//     country: 'India'
//   }
// ]

// Now comes deleting part--->
// ashish> db.users.remove({"name":"santi"})
// DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
// { acknowledged: true, deletedCount: 1 }
// ashish> db.users.find({}).pretty()
// [
//   {
//     _id: ObjectId("64d8a90f19a500cb03882d4a"),
//     name: 'amir',
//     age: 29,
//     country: 'India'
//   },
//   {
//     _id: ObjectId("64d8b964b8bec3ad75f91851"),
//     name: 'amir',
//     city: 'panvel',
//     country: 'India'
//   }
// ]

// update an delete are destructive meaning that once done it can't be undone

// if we want to remove any particular key from any documents then command is ---->

// ==
// <=
// >=
// !=

// equal to 
// ashish> db.users.find({"age":{$eq:23}})
// [
//   {
//     _id: ObjectId("64d8c3adb8bec3ad75f91852"),
//     name: 'ashish',
//     age: 23
//   }
// ]

// ashish> db.users.find({"age":{$ne:23}}) not equal to
// [
//   {
//     _id: ObjectId("64d8c3adb8bec3ad75f91853"),
//     name: 'twinkle',
//     age: 26
//   },
//   { _id: ObjectId("64d8c3adb8bec3ad75f91854"), name: 'Reena', age: 28 }
// ]

// same for this as well lte ---->less than equal to and gte ----> greater than equal to , lt --> less than and gt greater than.




