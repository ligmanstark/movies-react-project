import React from 'react';

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			type: '',
		};
		this.handleKey = this.handleKey.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	handleKey(event) {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	}

    handleFilter(event) {
        this.setState(()=>({ type: event.target.dataset.type }), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        })
	}

	render() {
		const { type } = this.state;
		return (
			<div className='row'>
				<div className='col s12'>
					<div className='input-field col s12'>
						<input
							placeholder='Search movies'
							type='search'
							className='validate'
							value={this.state.search}
							onChange={(event) =>
								this.setState({ search: event.target.value })
							}
							onKeyDown={this.handleKey}
						/>
						<button
							className='btn search-btn'
							onClick={() => this.props.searchMovies(this.state.search,this.state.type)}
						>
							Search
						</button>
						<div className='filter'>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										data-type=''
										type='radio'
										onChange={this.handleFilter}
										checked={type === ''}
									/>
									<span>All</span>
								</label>
							</p>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										data-type='movie'
										type='radio'
										onChange={this.handleFilter}
										checked={type === 'movie'}
									/>
									<span>Movies</span>
								</label>
							</p>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										data-type='series'
										type='radio'
										onChange={this.handleFilter}
										checked={type === 'series'}
									/>
									<span>Serials</span>
								</label>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
