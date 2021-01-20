import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import VideoCarousel from './src/VideoCarousel';

const data = [
  { video: 'https://carousel-videos.s3-sa-east-1.amazonaws.com/pexels-nipun-nath-ic-5487786+(1)+(1).mp4', img: 'https://travell-carousel-images.s3-sa-east-1.amazonaws.com/Captura+de+ecr%C3%A3+de+2021-01-14+00-09-08.jpg', title: 'Bali - indonesia' },
  { video: 'https://carousel-videos.s3-sa-east-1.amazonaws.com/rn_scenario_edited_1.mp4', img: 'https://travell-carousel-images.s3-sa-east-1.amazonaws.com/Captura+de+ecr%C3%A3+de+2021-01-14+00-08-48.jpg', title: 'New York - United States' },
  { video: 'https://carousel-videos.s3-sa-east-1.amazonaws.com/rn_scenario_edited_2.mp4', img: 'https://travell-carousel-images.s3-sa-east-1.amazonaws.com/Captura+de+ecr%C3%A3+de+2021-01-14+00-08-24.jpg', title: 'Maldivian islands' },
  { video: 'https://carousel-videos.s3-sa-east-1.amazonaws.com/video+(1).mp4', img: 'https://travell-carousel-images.s3-sa-east-1.amazonaws.com/Captura+de+ecr%C3%A3+de+2021-01-14+00-07-59.jpg', title: 'Rio De Janeiro - Brasil' },
  { video: 'https://carousel-videos.s3-sa-east-1.amazonaws.com/Pexels+Videos+1994829+(1).mp4', img: 'https://travell-carousel-images.s3-sa-east-1.amazonaws.com/Captura+de+ecr%C3%A3+de+2021-01-18+23-35-33.jpg', title: 'San Francisco- USA'}
]


export default function App() {
  const [curentIndex, setCurrentIndex] = useState(0);
  
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: data[curentIndex].img}} 
        style={styles.backgroundImageContainer}
      />
      <VideoCarousel 
        curentIndex={curentIndex}
        setCurrentIndex={setCurrentIndex}
        data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  backgroundImageContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }
});
