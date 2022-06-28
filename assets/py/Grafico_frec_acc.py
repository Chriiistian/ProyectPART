#Importar las librerías necesarias
import pandas as pd
import numpy as np
from statistics import mean
from sklearn.cluster import KMeans
from folium import Map, Circle

url='https://raw.githubusercontent.com/Chriiistian/ProyectPART/Pagina_Web(J)/CSV/Data%20frame%20final.csv'
dbf=pd.read_csv(url)

dbf=dbf.drop(['Unnamed: 0'], axis=1)

Lat= dbf['LAT']
Lon = dbf['LNG']
ct = dbf['Count_acc']
X = []
for i in range(len(dbf['LAT'])):
    X.append(Lat[i])
    X.append(Lon[i])

X = np.array(X)

X = X.reshape(-1, 2,)

clusters = 5
KMean = KMeans(n_clusters=clusters)
KMean_g = KMean.fit_predict(X)
KMean.fit(X, sample_weight=ct)

KMean.cluster_centers_

mediaLong = mean(Lon)
mediaLat = mean(Lat)

mapa = Map(location=[mediaLat, mediaLong], zoom_start = 13)

tooltip = 'Zona con mayor frecuencia de accidentes'
radio = 150 #150 como inicio
Circle([KMean.cluster_centers_[0][0], KMean.cluster_centers_[0][1]], popup="Centro", tooltip = tooltip, radius= radio, fill = True,color = "#DB4646" ).add_to(mapa)
Circle([KMean.cluster_centers_[1][0], KMean.cluster_centers_[1][1]], popup="Centro", tooltip = tooltip, radius= radio, fill = True,color = "#DB4646" ).add_to(mapa)
Circle([KMean.cluster_centers_[2][0], KMean.cluster_centers_[2][1]], popup="Centro", tooltip = tooltip, radius= radio, fill = True,color = "#DB4646" ).add_to(mapa)
Circle([KMean.cluster_centers_[3][0], KMean.cluster_centers_[3][1]], popup="Centro", tooltip = tooltip, radius= radio, fill = True,color = "#DB4646" ).add_to(mapa)
Circle([KMean.cluster_centers_[4][0], KMean.cluster_centers_[4][1]], popup="Centro", tooltip = tooltip, radius= radio, fill = True,color = "#DB4646" ).add_to(mapa)
mapa.save("mapas/prueba_mapa.html")
print("Mapa Actualizado")


