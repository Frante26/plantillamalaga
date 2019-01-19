import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {



jugadores =
[
{
'nombre':'Juán Ramón López Muñiz',
'posicion':'entrenador',
'entrenador' : true
},
{
'nombre':'Munir',
'posicion':'portero',
'demarcacion':'portero',
'dorsal' : '1',
'porteros' : true
},
{
'nombre':'Pawel Kieszek',
'posicion':'Portero',
'demarcacion':'portero',
'dorsal' : '25',
'porteros' : true
}, 
{
'nombre':'Andrés Prieto',
'posicion':'Portero',
'demarcacion':'portero',
'dorsal' : '13',
'porteros' : true
},
{
'nombre':'Luis Hernández',
'posicion':'defensa',
'demarcacion':'Central',
'dorsal' : '4',
'defensas' : true
},
{
'nombre':'Diego González',
'posicion':'defensa',
'demarcacion':'Central',
'dorsal' : '3',
'defensas' : true
},
{
'nombre':'Pau Torres',
'posicion':'defensa',
'demarcacion':'Central',
'dorsal' : '5',
'defensas' : true
}, 
{
'nombre':'David Lombán',
'posicion': 'defensa',
'demarcacion':'Central',
'dorsal' : '18',
'defensas' : true
},
{
'nombre':'Federico Ricca',
'posicion':'defensa',
'demarcacion':'Lateral izquierdo',
'dorsal' : '15',
'defensas' : true
},
{
'nombre': 'Juankar',
'posicion':'defensa',
'demarcacion':'Lateral izquierdo',
'dorsal' : '7',
'defensas' : true
},
{
'nombre':'Cifuentes',
'posicion': 'defensa',
'demarcacion':'Lateral derecho',
'dorsal' : '12',
'defensas' : true
}, 
{
'nombre':'Iván Rodriguez',
'posicion': 'defensa',
'demarcacion':'Lateral derecho',
'dorsal' : '29',
'defensas' : true
},
{
'nombre':'Alfred N´Diaye',
'posicion': 'centrocampista',
'dorsal' : '21',
'demarcacion':'Pivote',
'centrocampistas' : true
},
{
'nombre':'Mehdi Lacen',
'posicion': 'centrocampista',
'dorsal' : '6',
'demarcacion':'Pivote',
'centrocampistas' : true
},
{
'nombre':'Adrián González',
'posicion': 'centrocampista',
'demarcacion':'Medio centro',
'dorsal' : '8',
'centrocampistas' : true
}, 
{
'nombre':'Badr Boulahroud',
'posicion': 'centrocampista',
'demarcacion':'Medio centro',
'dorsal' : '14',
'centrocampistas' : true
},
{
'nombre':'Juanpi Añor',
'posicion': 'centrocampista',
'demarcacion':'Medio centro ofensivo',
'dorsal' : '10',
'centrocampistas' : true
},
{
'nombre':'Dani Pacheco',
'posicion': 'centrocampista',
'demarcacion':'Medio centro ofensivo',
'dorsal' : '22',
'centrocampistas' : true
},
{
'nombre':'Javi Ontiveros',
'posicion': 'centrocampista',
'demarcacion':'Extremo',
'dorsal' : '17',
'centrocampistas' : true
}, 
{
'nombre':'Renato Santos',
'posicion': 'centrocampista',
'demarcacion':'Extremo',
'dorsal' : '11',
'centrocampistas' : true
},
{
'nombre':'Álex Mula',
'posicion': 'centrocampista',
'demarcacion':'Extremo',
'dorsal' : '28',
'centrocampistas' : true
}, 
{
'nombre':'Hicham',
'posicion': 'centrocampista',
'demarcacion':'Extremo',
'dorsal' : '31',
'centrocampistas' : true
},
{
'nombre':'Gustavo Blanco Leschuk',
'posicion': 'delantero',
'demarcacion':'Delantero centro',
'dorsal' : '9',
'delanteros' : true
},
{
'nombre':'Jack Harper',
'posicion': 'delantero',
'demarcacion':'Delantero centro',
'dorsal' : '30',
'delanteros' : true
},
{
'nombre':'Mamadou Koné',
'posicion': 'delantero',
'demarcacion':'Delantero centro',
'dorsal' : '24',
'delanteros' : true
}]
	

  constructor() {}

  ngOnInit() {}

}
