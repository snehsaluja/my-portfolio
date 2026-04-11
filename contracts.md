# API Contracts — Sneh Saluja Portfolio

## Contact Messages API

### POST /api/contact
Saves a contact form message to MongoDB.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required)"
}
```

**Response (201):**
```json
{
  "id": "string (uuid)",
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "ISO datetime",
  "status": "new"
}
```

**Response (422):** Validation error

---

## Frontend Integration

### Contact.jsx
- Replace localStorage mock with `POST ${BACKEND_URL}/api/contact`
- On success: show toast "Message sent!"
- On error: show toast with error message
- Remove the "Currently using browser storage" note

## MongoDB Collection: `contact_messages`
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "new"
}
```
