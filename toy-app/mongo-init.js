db.createUser(
    {
        user: "root",
        pwd: "rootpassword",
        roles: [
            {
                role: "readWrite",
                db: "medical"
            }
        ]
    }
);

db = db.getSiblingDB('medical');

db.createCollection('patients', { capped: false });

db.patients.insert([
    { "name": "Martin", "age":32 },
    { "name": "Jim", "age":23},
    { "name": "Sarah", "age":45},
    { "name": "Eve", "age":19},
    { "name": "Mike", "age":56}
]);