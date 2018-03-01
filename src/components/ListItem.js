import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation,
	NativeModules } from 'react-native';

import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules

UIManager.setLayoutAnimationEnabledExperimental
	 && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component
{
	componentWillUpdate()
	{
		LayoutAnimation.spring();
	}

	renderDescription()
	{
		const { library, expanded } = this.props;
		
		if (expanded)
		{
			return (
				<CardSection>
					<Text style={{ flex: 1, marginLeft: 20 }}>
						{ library.description }
					</Text>
				</CardSection>
			);
		}
	}

	render()
	{
		const { titleStyle } = styles;
		const { selectLibrary } = this.props;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback
				onPress={ () => selectLibrary(id) }>
				<View>
					<CardSection>
						<Text style={ titleStyle }>
							{ title }
						</Text>						
					</CardSection>
					{ this.renderDescription() }
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;

	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);