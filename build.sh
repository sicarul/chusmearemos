grunt build
cd dist
s3cmd sync . s3://chusmearemos.sicarul.com
cd data/
gzip -9 escuchas.json
mv escuchas.json.gz escuchas.json
s3cmd sync --add-header="Content-Encoding:gzip" escuchas.json s3://chusmearemos.sicarul.com/data/escuchas.json
cd ..
