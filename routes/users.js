var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send({
      "user": {
          "id": 1,
          "name": "Taner",
          "last_name": "Yener",
          "phone_number": "905512084322",
          "email": "iletisim@taneryener.com",
          "email_verified_at": null,
          "created_at": "2020-01-08 08:51:58",
          "updated_at": "2020-01-31 10:52:22",
          "user_group": [
              {
                  "id": 1,
                  "name": "Owners",
                  "claims": [
                      {
                          "role": "owner"
                      }
                  ],
                  "pivot": {
                      "user_id": 1,
                      "user_groups_id": 1
                  }
              }
          ]
      },
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJuYW1lIjoiVGFuZXIiLCJjbGFpbXMiOlt7InJvbGUiOiJvd25lciJ9XSwiZXhwaXJlX2RhdGUiOiIyMDIwLTAyLTE1VDEwOjUyOjIyLjIzNDM4MVoifQ.sKgeMYKfQSSMNRyiPQXNNQx_06OFXg6h2TUuIojDqvQ",
      "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcmVfZGF0ZSI6IjIwMjAtMDItMTVUMTA6NTI6MjIuMjM1NzQzWiJ9.i7eCQSUGqNDnz8EmB5dpyX4xQ5ZGUaZKivBPutbN9x0"
  });
});

module.exports = router;
