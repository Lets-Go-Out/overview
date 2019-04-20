# stop = 501
for ((i = 500; i < 100000; i++))
do
    psql -c "EXPLAIN ANALYZE SELECT * FROM restaurants WHERE id = '$i'" > test.txt
done
    

# <<EOF

# exit;
# EOF