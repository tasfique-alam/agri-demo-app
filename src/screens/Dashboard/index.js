import React from "react";
import { ImageBackground, SafeAreaView, FlatList } from "react-native";
import Block from '../../components/Block'
import Text from '../../components/Text'
import styles from './styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const DATA = [
    {
        id: 1,
        title: 'Changes in Acid Invertase Activity and Sugar Distribution in Asparagus Spears Harvested in Autumn; Authors: A.K.M. Shameem ALAM, Toshiyuki MATSUI, Takao IKEUCHI Author information',
        des: 'Keywords: Asparagus spears, Invertase activity, Spear portion, Harvest season, Sugar content, Cultiva JOURNALS FREE ACCESS 1998 Volume 42 Issue 4 Pages 257-262 DOI https://doi.org/10.11248/jsta1957.42.257 Abstract Changes in acid invertase activity and sugar distribution were investigated in different portions of asparagus (As-paragus officinalisL. cv. E 414 and Green Tower, grown in a greenhouse) spears harvested in autumn. In the two cultivars and portions, the invertase activity decreased gradually with time. The acid invertase in the soluble fraction showed a higher activity than that in the cell wall-bound fraction. Furthermore, the top portion of the spear showed a significantly higher acid invertase activity than the bottom portion for the soluble fraction. However, in the cell wall-bound fraction a higher activity was detected in the bottom portion. Of the two cultivars, ‘E 414’showed a higher invertase activity than‘Green Tower’. Sucrose content increased almost gradually in both portions of the two cultivars with time. It was negatively correlated with the acid invertase activity in both portions and accounted well for the relation between the substrate and the activity. Fructose content was significantly higher than the glucose and sucrose contents in the top and bottom portions of the spear. Reducing sugar content was also negatively correlated with the acid invertase activity, presumably due to the sucrose synthase activity.',
    },
    {
        id: 2,
        title: 'Changes in Acid Invertase Activity and Sugar Distribution in Asparagus Spears Harvested in Autumn; Authors: A.K.M. Shameem ALAM, Toshiyuki MATSUI, Takao IKEUCHI Author information',
        des: 'Keywords: Asparagus spears, Invertase activity, Spear portion, Harvest season, Sugar content, Cultiva JOURNALS FREE ACCESS 1998 Volume 42 Issue 4 Pages 257-262 DOI https://doi.org/10.11248/jsta1957.42.257 Abstract Changes in acid invertase activity and sugar distribution were investigated in different portions of asparagus (As-paragus officinalisL. cv. E 414 and Green Tower, grown in a greenhouse) spears harvested in autumn. In the two cultivars and portions, the invertase activity decreased gradually with time. The acid invertase in the soluble fraction showed a higher activity than that in the cell wall-bound fraction. Furthermore, the top portion of the spear showed a significantly higher acid invertase activity than the bottom portion for the soluble fraction. However, in the cell wall-bound fraction a higher activity was detected in the bottom portion. Of the two cultivars, ‘E 414’showed a higher invertase activity than‘Green Tower’. Sucrose content increased almost gradually in both portions of the two cultivars with time. It was negatively correlated with the acid invertase activity in both portions and accounted well for the relation between the substrate and the activity. Fructose content was significantly higher than the glucose and sucrose contents in the top and bottom portions of the spear. Reducing sugar content was also negatively correlated with the acid invertase activity, presumably due to the sucrose synthase activity.',
    },
    {
        id: 3,
        title: 'Far far away, behind the word mountains',
        des: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then',
    },
];


export default Dashboard = props => {

    const renderItem = ({ item }) => (

        <Block style={styles.item}>
            <Text style={styles.post}>{item.title}</Text>
            <Text textColor size={12} style={styles.des}>{item.des}</Text>
            <MaterialIcons name="date-range"/>
        </Block>
    );

    return (

        <Block block>
            <Block block style={styles.container}>
                <Text textColor size={20}>Dashboard</Text>

                <Block flex={1} style={styles.postBlock}>
                    <Block flex={false} style={styles.postBlock2}>
                        <Text style={styles.title}>posts</Text>
                    </Block>
                    <SafeAreaView style={styles.block}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </Block>
            </Block>
        </Block>

    );
}