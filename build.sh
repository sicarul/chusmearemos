grunt build
cd dist
s3cmd sync --rr . s3://chusmearemos.sicarul.com --exclude="escuchas.json"
cd data
s3cmd sync -m 'application/json' --rr escuchas.json s3://chusmearemos.sicarul.com/data/escuchas.json
gzip -9 escuchas.json
s3cmd sync -m 'application/json' --rr --add-header="Content-Encoding:gzip" escuchas.json.gz s3://chusmearemos.sicarul.com/data/escuchas.json.gz
cd ../..
