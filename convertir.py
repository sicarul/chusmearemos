import csv, os, subprocess, re

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

        if row['filename'] != 'filename':
            if not name in map:
                map[name] = {}

            map[name]['filename'] = row['filename']
            map[name]['provincia'] = row['provincia']
            map[name]['destino'] = row['destino']
            map[name]['origen'] = row['origen']
            map[name]['inicio'] = row['inicio']
            map[name]['fin'] = row['fin']
            map[name]['localidad'] = row['localidad']
            map[name]['direccion'] = row['direccion']

            if not row['origen']:
                f_search = row['filename'].upper()
                search_origen = re.search('O\-(\d+)', f_search)
                if search_origen:
                    map[name]['origen'] = search_origen.group(1)
                elif 'O-PRIVADO' in f_search:
                    map[name]['origen'] = 'PRIVADO'

                search_destino = re.search('D\-(\d+)', f_search)
                if search_destino:
                    map[name]['destino'] = search_destino.group(1)
                elif 'D-PRIVADO' in f_search:
                    map[name]['destino'] = 'PRIVADO'


final = [r for k,r in map.iteritems()]

import json

with open('app/data/escuchas.json', 'w') as e:
    json.dump(final, e)
