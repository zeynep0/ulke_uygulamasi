import * as React from 'react';
import { View, Text, Image } from 'react-native';

class CountryDetails extends React.Component {
	static navigationOptions = {
		title: 'Country Details',
	};

	render() {
		const { name, nativeName, region, alpha2Code, demonym } = this.props.navigation.state.params.country;

		return (
			<View>
				<Text>{` Ülke: ${name} Kıta:${region} Dil: ${demonym} ( ${nativeName} )`}</Text>
				<Image style={{width: 100, height: 100}}
          			source={{ uri: `https://www.countryflags.io/${alpha2Code}/flat/64.png` }} />
			</View>
		);
	}
}

export default CountryDetails;
