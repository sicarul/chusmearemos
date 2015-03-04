grunt build
cd dist
s3cmd sync . s3://chusmearemos.sicarul.com
cd ..
