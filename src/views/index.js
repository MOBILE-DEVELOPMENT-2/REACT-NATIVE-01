import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {style_01} from '../styles/style_01';

const data = [
  {
    nombre: 'Capricornio',
    Date: 'Enero 20 - Feb 16',
    Type: 'Earth',
    Celestial_star: 'Plutón',
    imagen: require('../imgs/logos/12_Capricornio.png'), // Agregamos la imagen para Capricornio
  },
  {
    nombre: 'Acuario',
    Date: 'Feb 16 - Mar 11',
    Type: 'Air',
    Celestial_star: 'Urano ',
    imagen: require('../imgs/logos/01_Acuario.png'),
  },
  {
    nombre: 'Piscis',
    Date: 'Mar 11 - Abril 18',
    Type: 'Water',
    Celestial_star: 'Neptuno',
    imagen: require('../imgs/logos/02_Pisis.png'),
  },
  {
    nombre: 'Aries',
    Date: 'Abril 18 - Mayo 13',
    Type: 'Fire',
    Celestial_star: 'Marte',
    imagen: require('../imgs/logos/03_Aries.png'),
  },
  {
    nombre: 'Tauro',
    Date: 'Mayo 13 - Junio 21',
    Type: 'Earth',
    Celestial_star: 'Venus',
    imagen: require('../imgs/logos/04_Tauro.png'),
  },
  {
    nombre: 'Géminis',
    Date: 'Junio 21 - julio 20',
    Type: 'Air',
    Celestial_star: 'Mercurio',
    imagen: require('../imgs/logos/05_Geminis.png'),
  },
  {
    nombre: 'Cancer',
    Date: 'Julio 20 - Agosto 10',
    Type: 'Water',
    Celestial_star: 'La Luna',
    imagen: require('../imgs/logos/06_Cancer.png'),
  },
  {
    nombre: 'Leo',
    Date: 'Agosto 10 - Sept 16',
    Type: 'Fire',
    Celestial_star: 'El Sol',
    imagen: require('../imgs/logos/07_Leo.png'),
  },
  {
    nombre: 'Virgo',
    Date: 'Sept 16 - oct 20',
    Type: 'Earth',
    Celestial_starc: 'Mercurio',
    imagen: require('../imgs/logos/08_Virgo.png'),
  },
  {
    nombre: 'Libra',
    Date: 'Oct 30 - nov 23',
    Type: 'Air',
    Celestial_star: 'Venus',
    imagen: require('../imgs/logos/09_Libra.png'),
  },
  {
    nombre: 'Escorpión',
    Date: 'Nov 23 - Nov 29',
    Type: 'Water',
    Celestial_star: 'Plutón',
    imagen: require('../imgs/logos/10_Escorpio.png'),
  },
  {
    nombre: 'Sagitario',
    Date: 'Dic 17 - Jan 20',
    Type: 'Fire',
    Celestial_star: 'Júpiter',
    imagen: require('../imgs/logos/11_Sagitario.png'),
  },
];

const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>Demostración 01</Text>
        <Text style={style_01.p1}>
          Desde el 2019, se está realizando el proceso de rediseño de la
          carrera, el cual implica la actualización de los contenidos en las
          asignaturas, así como las formas de mediación mas actuales, todo esto
          tomando en cuenta tambien diversas recomendaciones derivadas del
          proceso de autoevalación y acreditación de la carrera.
        </Text>

        <ScrollView style={{marginTop: 8}}>
          {data.map(item => (
            <View style={style_01.tarjeta} key={item.codigo}>
              <Text style={style_01.zodiacText}>Nombre: {item.nombre}</Text>
              <Text style={style_01.zodiacText}>Date: {item.Date}</Text>
              <Text style={style_01.zodiacText}>Type: {item.Type}</Text>
              <Text style={style_01.zodiacText}>
                Celestial_star: {item.Celestial_star}
              </Text>
              <Image
                source={item.imagen}
                style={style_01.imagenStyle} // Estilo para la imagen del signo zodiacal
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>
          Carrera de Tecnologías de Información
        </Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;
