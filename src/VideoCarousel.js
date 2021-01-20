import React, { useRef, useCallback } from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { Video } from 'expo-av';
import throttle from 'lodash.throttle';

const { width } = Dimensions.get('window');

const VideoCarousel = ({curentIndex, setCurrentIndex, data}) => {
    const carouselRef = useRef();

    const throttledScroll = useCallback(
        throttle((item) => handleScroll(item), 200),
        [], // will be created only once initially
    );
    
    
    const _renderItem = ({item, index}) => (
        <View style={styles.renderItemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.carouselText}>{item.title}</Text>
            </View>
            <View style={styles.videoContainer}>
                <Image source={{uri: item.img}} style={styles.backgroundImage}/>
                <Video 
                    source={{uri: data[index].video }}
                    resizeMode="cover"
                    style={styles.backgroundVideo}
                    shouldPlay={index === curentIndex}
                />
            </View>
        </View>
    );


    const handleScroll = () => {
        if(carouselRef.current){
            console.log(carouselRef.current.currentIndex)
            setCurrentIndex(carouselRef.current.currentIndex);
        }
    }


    
    
    
    return (
        <View style={styles.carouselContainer}>
            <Carousel 
            data={data}
            renderItem={_renderItem}
            layout='default'
            itemWidth={300}
            sliderWidth={width}
            onScroll={throttledScroll}
            ref={carouselRef}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    carouselContainer: {
        justifyContent: 'center',
        height: 450
    },
    renderItemContainer: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 25,
    },
    videoContainer: {
        width: '90%',
        height: '80%',
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderRadius: 15,
        overflow: 'hidden'
    },
    textContainer: {
        justifyContent: 'flex-start',
        width: '100%'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 2
    },
    carouselText: {
        fontSize: 20,
        color: 'white',
        letterSpacing: 1.5,
        marginBottom: 15,
        marginLeft: 25
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        height: '100%',
        width: '100%',
    },
})

export default VideoCarousel
