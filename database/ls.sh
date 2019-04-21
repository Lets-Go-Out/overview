# PSQL generate times, add every two lines togeter for indivudal query times
# for ((i = 0; i < 10000000; i+= 100000))
# do
#     psql -c "EXPLAIN ANALYZE SELECT * FROM restaurants WHERE id = '$i'" >> Psqltest.txt
# done
# grep 'ms' Psqltest.txt >> psqltimes.txt
# grep -o  '[0-9].[0-9][0-9][0-9]' Psqltimes.txt >> psqlnumbers.txt
# rm Psqltimes.txt 
# rm Psqltest.txt
for ((i = 1; i < 10000000; i+= 99999))
do
    cqlsh -e "TRACING ON; SELECT * FROM restaurants.restaurants WHERE id = $i" >> Casstest.txt
done
grep 'Request complete' Casstest.txt >> cass-complete.txt
rm Casstest.txt
# <<EOF

# exit;
# EOF

## psql
