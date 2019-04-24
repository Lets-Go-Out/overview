# Query Speed Testing - Postgresql vs Cassandra

### Read Query

Test code in brief:

```
for i = 0; i < 10000000; i+= 10000
SELECT * FROM restaurants WHERE id = i;
```

I ran 1000 read operations in both Cassandra and Postgresql and plotted their response times below.

![test](https://i.imgur.com/J00Jsyl.png)

Cassandra average: **1.716 ms**

Postgresql average: **1.962 ms**

Therefore, Cassandra is, on average, **~14%** faster than Postgresql for this use case.

## Conclusion

The overview service is entirely read focused, so Cassandra is the clear choice. Furthermore, this testing was done with an unoptimized single node in Cassandra. Cassandra operation speed is directly proportional to the number of nodes. These nodes are split among as many as needed datacenters providing unlimited scaling potential.
