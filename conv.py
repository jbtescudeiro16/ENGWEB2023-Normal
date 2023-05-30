import json
 
# Opening JSON file
with open('plantas.json') as json_file:
    data = json.load(json_file)

for planta in data:
     planta["_id"] = str(planta.pop("Id", None))
     planta["Num_Registo"] = planta.pop("Número de Registo", None)
     planta["NomeCientifico"]=planta.pop("Nome Científico", None)
     planta["DataPlant"]=planta.pop("Data de Plantação", None)
     planta["DataAct"]=planta.pop("Data de actualização", None)
     planta["NumInterv"]=planta.pop("Número de intervenções", None)
     planta["Cod_Rua"]=planta.pop("Código de rua", None)
     planta["Especie"]=planta.pop("Espécie", None)
     planta["Implantacao"]=planta.pop("Implantação", None)

json_object = json.dumps(data, indent = 4,ensure_ascii=False) 


with open('plantas4.json', 'w') as f:
    f.write(json_object)


# print(data)
# print(data.keys())