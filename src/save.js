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
		dividerPos
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{ imageUrl || afterimageUrl  ? (
				<div class={ ( displayVertical == 1 ) ? ( 'vertical-compare-mgarcia' ) : ( 'horizontal-compare-mgarcia' )  }>
					<h2>{ dividerPos }%</h2>
					<img-comparison-slider direction={ ( displayVertical == 1 ) ? ( 'vertical' ) : ( 'horizontal' )  } value={ dividerPos }>
						<figure slot="first" class="before-compare-mgarcia">
							<img slot="first" width="100%" src={imageUrl} alt={imageAlt} />
							{ displaylabels && <figcaption>{ beforeLabel }</figcaption> }
						</figure>
						<figure slot="second" class="after-compare-mgarcia">
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
