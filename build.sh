grunt build
cd dist
s3cmd sync --rr . s3://chusmearemos.sicarul.com --exclude="escuchas.json"
cd data
gzip -9 escuchas.json
mv escuchas.json.gz escuchas.json
s3cmd sync -m 'application/json' --rr --add-header="Content-Encoding:gzip" --add-header="Cache-Control:10368000" escuchas.json s3://chusmearemos.sicarul.com/data/escuchas.json
cd ../../
