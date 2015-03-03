import csv, os, subprocess

def upsert(data, field, value):
    if not field in data:
        data[field] = None

    if value:
        data[field] = value

    return data

with open('escuchas.csv', 'rb') as f:
    escucsv = csv.DictReader(f)

    map = {}

    for row in escucsv:
        name = row['filename']

        if not name in map:
            map[name] = {}

        map[name]['filename'] = row['filename']
        map[name] = upsert(map[name], 'provincia', row['provincia'])
        map[name] = upsert(map[name], 'destino', row['destino'])
        map[name] = upsert(map[name], 'origen', row['origen'])
        map[name] = upsert(map[name], 'inicio', row['inicio'])
        map[name] = upsert(map[name], 'fin', row['fin'])
        map[name] = upsert(map[name], 'localidad', row['localidad'])
        map[name] = upsert(map[name], 'direccion', row['direccion'])


final = [r for k,r in map.iteritems()]

import json

with open('escuchas.json', 'w') as e:
    json.dump(final, e)
