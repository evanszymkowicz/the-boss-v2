import React from 'react';
import FeatureLink from '../ui/link/feature-link';
import Section from '../ui/section';

import '../../scss/ui/_section-container.scss';

const Story = () => {
	return (
		<div className="section-container section-right">
			<figure className="image" />
			<Section title="The Boss" subtitle="A Rick Ross Community">
				<div className="container">
					<div className="columns is-multiline">
						<div className="column is-two-thirds is-offset-one-third">
							<p>
								Maybach<strong>Music</strong>.
							</p>
							<FeatureLink to={`/story`} label="about" />
						</div>
					</div>
				</div>
			</Section>
		</div>
	);
};

export default Story;
