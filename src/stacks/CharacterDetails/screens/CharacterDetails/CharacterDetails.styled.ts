import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const IMAGE_DIMENSION = screenWidth - 80;
const CARD_WIDTH = screenWidth - 32;
const PARAGRAPH_PADDING = (screenWidth - IMAGE_DIMENSION - 32) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  return: {
    color: '#59695C',
    marginTop: 8,
    textDecorationLine: 'underline',
    marginLeft: 16,
  },
  infoParagraphElement: {
    backgroundColor: '#F4F6F5',
    width: IMAGE_DIMENSION / 2 - 8,
    borderRadius: 10,
    display: 'flex',
    paddingBottom: 8,
    paddingTop: 8,
    paddingLeft: 8,
    marginBottom: 16,
  },
  paragraphsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingLeft: PARAGRAPH_PADDING,
    paddingRight: PARAGRAPH_PADDING,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
    marginTop: 12,
    marginBottom: 24,
    width: CARD_WIDTH,
    paddingTop: 24,
  },
  cardTitleText: {
    fontWeight: 500,
    fontSize: 36,
    marginBottom: 16,
    color: '#162C1B',
  },
  cardTitleContainer: {
    width: '100%',
    paddingLeft: PARAGRAPH_PADDING,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    color: '#59695C',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    letterSpacing: -0.2,
    fontWeight: 400,
  },
  img: {
    width: IMAGE_DIMENSION,
    height: IMAGE_DIMENSION,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#224229',
    marginBottom: 16,
  },
  shadowWrapper: {
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    top: 6,
    left: 6,
    right: -6,
    bottom: -6,
    backgroundColor: '#224229',
    borderRadius: 25,
    zIndex: 0,
    marginTop: 12,
    marginBottom: 24,
  },
  likeButton: {
    width: IMAGE_DIMENSION,
    borderRadius: 25,
    marginBottom: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButtonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButtonText: {
    marginLeft: 4,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    textTransform: 'uppercase',
  },
});
