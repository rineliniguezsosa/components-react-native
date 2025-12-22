import { StyleSheet } from 'react-native';
// import { colors } from './colors';

export const globalStyles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      // color: colors.text,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      // color: colors.text,
    },

    mainContainer: {
      flex: 1,
      // backgroundColor: colors.background,
    },
    globalMargin: {
      paddingHorizontal: 20,
      flex: 1,
    },

    btnPrimary: {
      // backgroundColor: colors.primary,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
    },
    btnPrimaryText: {
      // color: colors.text,
      fontSize: 16,
    },
    input:{
      height:40,
      margin:12,
      borderWidth:1,
      padding:10,
      borderRadius:10,
      // color:colors.text,
      borderColor:'rgba(0,0,0,0.3)',
    },
  });
