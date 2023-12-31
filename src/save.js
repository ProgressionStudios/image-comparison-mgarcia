import { useBlockProps } from '@wordpress/block-editor';

export default function save( {attributes} ) {

	const {
		imageUrl,
		imageAlt,
		afterimageUrl,
		afterimageAlt,
		displaylabels,
		beforeLabel,
		afterLabel,
		displayVertical,
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{ imageUrl || afterimageUrl  ? (
				<div className={ ( displayVertical == 1 ) ? ( 'vertical-compare-mgarcia' ) : ( 'horizontal-compare-mgarcia' )  }>
					<img-comparison-slider direction={ ( displayVertical == 1 ) ? ( 'vertical' ) : ( 'horizontal' )  }>
						<figure slot="first" className="before-compare-mgarcia">
							<img slot="first" width="100%" src={imageUrl} alt={imageAlt} />
							{ displaylabels && <figcaption>{ beforeLabel }</figcaption> }
						</figure>
						<figure slot="second" className="after-compare-mgarcia">
							<img slot="second" width="100%" src={afterimageUrl} alt={afterimageAlt} />
							{ displaylabels && <figcaption>{ afterLabel }</figcaption> }
						</figure>
					</img-comparison-slider>
				</div>
			) : null
			}
		</div>
	);
}
