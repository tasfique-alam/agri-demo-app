import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f8fb',
        padding: 20
    },
    postBlock: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 5,
        elevation: 3
    },
    postBlock2: {
        backgroundColor: '#f7f8fb',
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: colors.borderColor
    },
    title: {
        color: colors.primaryColor,
        fontWeight: 'bold',
    },
    post: {
        color: colors.primaryColor,
        paddingVertical:5,
        fontSize:15
    },
    block: {
        padding: 10,
        margin:10,
        flex:1,
        backgroundColor:colors.white,
        elevation:3,
        borderRadius:5
    },
});

export default styles;
