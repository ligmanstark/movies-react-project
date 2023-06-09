import React from 'react';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<React.Fragment>
					<Header />
					<MainContent />
					<Footer />
				</React.Fragment>
			</div>
		);
	}
}

export default App;
