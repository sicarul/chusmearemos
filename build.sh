grunt build
cd dist/data
gzip -9 escuchas.json
mv escuchas.json.gz escuchas.json
cd ..
s3cmd sync . s3://chusmearemos.sicarul.com --exclude="escuchas.json"
cd data
s3cmd sync --add-header="Content-Encoding:gzip" escuchas.json s3://chusmearemos.sicarul.com/data/escuchas.json
cd ..
