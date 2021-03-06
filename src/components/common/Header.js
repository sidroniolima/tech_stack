import React from 'react';
import { Text, View } from 'react-native';

class Header extends React.Component
{
	render()
	{
		const { textStyle, viewStyle } = styles;
	
		return (	
			<View style={viewStyle}>
				<Text style={textStyle}>{this.props.headerText}</Text>
			</View>
		);
	}
};

const styles = 
{
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F8F8F8',
		paddingTop: 15,
		height: 60,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };