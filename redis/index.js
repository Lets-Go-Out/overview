const RedisServer = require("redis-server");
const server = new RedisServer({
  port: 6379,
  conf: "./redis.conf"
});
server.open(err => {
  if (err) console.error(err);
  else {
    console.log("redis is up!");
  }
});
