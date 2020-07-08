use microapp;

db.createCollection( "team",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "team",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "team_name": {
                    "bsonType": "string"
                },
                "user_ids": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                }
            },
            "required": [
                "_id",
                "team_name",
                "user_ids"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});