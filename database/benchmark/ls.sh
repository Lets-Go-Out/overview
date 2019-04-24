# PSQL generate times, add every two lines togeter for indivudal query times
for ((i = 1; i < 10000000; i+= 9999))
do
    psql -c "EXPLAIN ANALYZE SELECT * FROM restaurants WHERE id = '$i'" >> Psqltest.txt
done
grep 'ms' Psqltest.txt >> psqltimes.txt
grep -o  '[0-9].[0-9][0-9][0-9]' Psqltimes.txt >> psqlnumbers.txt
rm Psqltimes.txt 
rm Psqltest.txt
# for ((i = 0; i < 10000000; i+= 10000))
# do
#     cqlsh -e "TRACING ON; SELECT * FROM restaurants.restaurants WHERE id = $i" >> Casstest.txt
# done
# grep 'Request complete' Casstest.txt >> cass-complete.txt
# egrep -o ' [0-9]{3,5} ' cass-complete.txt >> cassNumbers.txt
# rm Casstest.txt
# rm cass-complete.txt
# <<EOF

# exit;
# EOF

## psql

## /usr/local/etc/cassandra