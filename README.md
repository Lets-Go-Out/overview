# API ROUTES
### POST /api/restaurants/overview
Create a new restaurant entry in the database.
  
  _Restaurant schema provided below_

Example:
```
fetch('/api/restaurants/overview',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    },
  body: JSON.stringify(restaurant)
})
  .then(success => console.log(success))
  .catch(err => console.error(err))
```  
### GET /api/restaurants/overview/:id
Get a single restaurant and all of its data by the id.

Example: 
```
fetch('/api/restaurants/overview/42')
  .then(res => res.json())
  .then(restaurant => cb(restaurant))
```

### PATCH /api/restaurants/overview/:id
Updates an entry in the database.

Example:
```
fetch('/api/restaurants/overview/42',{
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
    },
  body: JSON.stringify(restaurant)
})
  .then(res => res.json())
  .then(updatedRest => cb(updatedRest))
```
### DELETE /api/restaurants/overview/:id
Deletes an entry from the database.

Example:
```
fetch('/api/restaurants/overview/42',{
  method: 'DELETE',
})
  .then(success => console.log(success))
  .catch(err => console.log(err)
```

## Restaurant Schema
```
  const restaurant = {
    name: 'string',
    address_line_1: 'string',
    address_line_2: 'string',
    city: 'string',
    state: 'string',
    zip: 'string',
    longitude: float,
    latitude: float,
    neighborhood: 'string',
    website: 'string',
    description: 'string',
    hours: 'string',
    phone_number: 'string',
    price_range: 'string',
    review_average: 'string',
    review_count: 'string',
    dining_style: 'string',
    cuisine_types: 'string',
    private_dining: 'string',
    executive_chef: 'string',
    dress_code: 'string',
    catering: 'string',
    payment_options: 'string',
    parking_details: 'string',
    cross_street: 'string',
    promos: 'string',
    public_transit: 'string',
    private_party_fac: 'string',
    private_party_contact: 'string',
    tags: 'string'
  }
```
  
