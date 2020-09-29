import React from 'react';
import Section from '../ui/section';
import ArticleGrid from '../ui/article/article-grid';
//  TODO: Rename this section to follow theme once setup

export default class Blog extends React.Component {
	render() {
		if (this.props.posts.length > 0) {
			return (
				<Section title="Blog" subtitle="Pittica says" link="/blog">
					<div className="columns is-multiline">
						{this.props.posts.map(({ node }) => {
							return (
								<div className="column is-one-third" key={node.fields.slug}>
									<ArticleGrid node={node} />
								</div>
							);
						})}
					</div>
				</Section>
			);
		} else {
			return null;
		}
	}
}
